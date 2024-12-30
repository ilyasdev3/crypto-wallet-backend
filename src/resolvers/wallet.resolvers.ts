import { generateToken } from "./../utils/tokens";
import { comparePassword, hashPassword } from "./../utils/password";
import { WalletModel } from "../models/Wallet.model";
import { UserModel } from "../models/User.model";
import { TransactionModel } from "../models/Transaction.model";
import { ContractModel } from "../models/Contract.model";
import { IContext } from "../types/context.types";

import axios from "axios";
import { getWalletBalance, transfer } from "../contract/contractMethods";
import { MutationResolvers, QueryResolvers } from "../types/types.generated";
// export const contractAddress = "0x080c78d90209bb9bFA0bACff759761cC1FBf35ff";
export const contractAddress = "0xA9832676f2cbDA4884EC6fD7aedD410172BD42D5";
import cron from "node-cron";
import { checkTransactionStatus } from "../utils/checkTransaction.utils";

export const walletQueries: QueryResolvers<IContext> = {
  getWallet: async (parent, __, { user, error }) => {
    if (error) throw error;

    const wallet = await WalletModel.findOne({ userId: user.id });
    console.log("wallet", wallet);

    if (!wallet) throw new Error("Wallet not found");

    const getContract = await ContractModel.findOne({ name: "Bitcoin" });

    const parsedAbi = JSON.parse(getContract.abi);

    const getWallletBalance = await getWalletBalance(
      contractAddress,
      wallet.privateKey
    );
    console.log("getWalletBalance", getWallletBalance);

    const walletWithBalance = {
      userId: wallet.userId,
      address: wallet.address,
      privateKey: wallet.privateKey,
      publicKey: wallet.publicKey,
      mnemonic: wallet.mnemonic,
      balance: getWallletBalance,
      createdAt: wallet.createdAt,
      updatedAt: wallet.updatedAt,
    };

    return walletWithBalance as any;
  },

  getCoinData: async (parent, { currency, days }, { error }) => {
    if (error) throw error;

    try {
      const [coinResponse, chartResponse] = await Promise.all([
        axios.get(`https://api.coingecko.com/api/v3/coins/${currency}`),
        axios.get(
          `https://api.coingecko.com/api/v3/coins/${currency}/market_chart?vs_currency=usd&days=${days}`
        ),
      ]);

      const { data: coin } = coinResponse;
      const { prices } = chartResponse.data;

      const labels = prices.map((price: [number, number]) =>
        new Date(price[0]).toLocaleDateString()
      );
      const dataset = prices.map((price: [number, number]) => price[1]);

      return {
        name: coin.name,
        symbol: coin.symbol,
        image: coin.image.large,
        price: coin.market_data.current_price.usd,
        volume: coin.market_data.total_volume.usd,
        changePercentage: coin.market_data.price_change_percentage_24h,
        chartData: {
          labels,
          datasets: [{ data: dataset }],
        },
      };
    } catch (error) {
      console.error("Error fetching coin data:", error);
      throw new Error("Failed to fetch coin data");
    }
  },
};

export const walletMutations: MutationResolvers = {
  transferFunds: async (parent, { transferFunds }, { error, user }) => {
    if (error) throw error;
    console.log("user at top", user);
    const { amount, username } = transferFunds;
    console.log("amount", amount);
    console.log("username", username);

    try {
      // Fetch the sender's wallet details
      const currUserWallet = await WalletModel.findOne({ userId: user.id });
      console.log("currUserWallet", currUserWallet);

      // Fetch the recipient's details using username
      const getUserWithName = await UserModel.findOne({
        username: username,
      });
      console.log("getUserWithName", getUserWithName);

      // Fetch the recipient's wallet
      const recipientWallet = await WalletModel.findOne({
        userId: getUserWithName._id,
      });
      console.log("recipientWallet", recipientWallet);

      console.log("recipientWallet.address", recipientWallet.address);

      const txPromise = transfer(
        contractAddress,
        amount,
        currUserWallet.privateKey,
        recipientWallet.address
      );

      const response = {
        message:
          "Funds transfer initiated. You will be notified when the transaction status changes.",
      };

      // transaction for sender
      txPromise
        .then(async (tx) => {
          const transaction = new TransactionModel({
            senderWalletId: currUserWallet._id,
            receiverWalletId: recipientWallet._id,
            contractId: currUserWallet._id,
            transactionHash: tx.hash,
            amount: amount,
            status: "pending",
            type: "send",
          });

          // transaction for recipient
          const transaction2 = new TransactionModel({
            senderWalletId: currUserWallet._id,
            receiverWalletId: recipientWallet._id,
            contractId: currUserWallet._id,
            transactionHash: tx.hash,
            amount: amount,
            status: "pending",
            type: "receive",
          });

          await transaction.save();
          await transaction2.save();

          startTransactionCronJob(tx.hash, transaction._id);
          startTransactionCronJob(tx.hash, transaction2._id);

          console.log(
            "Transaction initiated on blockchain, monitoring started..."
          );
        })
        .catch((error) => {
          console.error("Error initiating blockchain transaction:", error);
        });

      return response;
    } catch (error) {
      console.error("Error in transferFunds:", error);
      throw new Error("Error transferring funds");
    }
  },
  withdrawFunds: async (parent, { withdrawFunds }, { error, user }) => {
    if (error) throw error;
    console.log("user at top", user);
    const { amount, address } = withdrawFunds;
    console.log("amount", amount);
    console.log("address", address);
    try {
      const currUserWallet = await WalletModel.findOne({ userId: user.id });
      console.log("currUserWallet", currUserWallet);

      const txPromise = transfer(
        contractAddress,
        amount,
        currUserWallet.privateKey,
        address
      );

      const response = {
        message:
          "Withdrawal initiated. You will be notified when the transaction status changes.",
      };

      txPromise
        .then(async (tx) => {
          const transaction = new TransactionModel({
            senderWalletId: currUserWallet._id,
            // receiverWalletId: currUserWallet._id,
            contractId: currUserWallet._id,
            transactionHash: tx.hash,
            amount: amount,
            status: "pending",
            type: "withdraw",
          });

          await transaction.save();

          startTransactionCronJob(tx.hash, transaction._id);

          console.log(
            "Transaction initiated on blockchain, monitoring started..."
          );
        })
        .catch((error) => {
          console.error("Error initiating blockchain transaction:", error);
        });

      return response;
    } catch (error) {
      console.error("Error in withdrawFunds:", error);
      throw new Error("Error withdrawing funds");
    }
  },
};

const startTransactionCronJob = (
  transactionHash: string,
  transactionId: any
) => {
  cron.schedule("*/30 * * * * *", async () => {
    // Runs every 30 seconds
    console.log(`Checking status for transaction ${transactionHash}`);

    try {
      const txStatus = await checkTransactionStatus(transactionHash);
      if (txStatus === "failed") {
        await updateTransactionStatus(transactionId, "failed");
        console.log(`Transaction ${transactionHash} failed`);
        return; // Stop cron job if transaction failed
      } else if (txStatus === "confirmed") {
        await updateTransactionStatus(transactionId, "completed");
        console.log(`Transaction ${transactionHash} confirmed`);
        return; // Stop cron job if transaction is confirmed
      }
    } catch (error) {
      console.error(
        `Error checking status for transaction ${transactionHash}:`,
        error
      );
    }
  });
};

const updateTransactionStatus = async (
  transactionId: string,
  status: string
) => {
  await TransactionModel.findByIdAndUpdate(transactionId, { status: status });
  console.log(`Transaction ${transactionId} status updated to ${status}`);
};
