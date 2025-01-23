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
import { startTransactionMonitoring } from "../services/transactionMonitor.service";

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
  // transferFunds: async (parent, { transferFunds }, { error, user }) => {
  //   if (error) throw error;

  //   try {
  //     const { amount, username } = transferFunds;

  //     // Get wallets
  //     const [currUserWallet, recipient] = await Promise.all([
  //       WalletModel.findOne({ userId: user.id }),
  //       UserModel.findOne({ username }),
  //     ]);

  //     if (!currUserWallet || !recipient) {
  //       throw new Error("Wallet or recipient not found");
  //     }

  //     const recipientWallet = await WalletModel.findOne({
  //       userId: recipient._id,
  //     });

  //     if (!recipientWallet) {
  //       throw new Error("Recipient wallet not found");
  //     }

  //     // Initiate transfer
  //     const txPromise = transfer(
  //       contractAddress,
  //       amount,
  //       currUserWallet.privateKey,
  //       recipientWallet.address
  //     );

  //     txPromise
  //       .then(async (tx) => {
  //         // Create transactions with owner IDs
  //         const [senderTx, receiverTx] = await Promise.all([
  //           TransactionModel.create({
  //             senderWalletId: currUserWallet._id,
  //             receiverWalletId: recipientWallet._id,
  //             ownerId: user.id, // Current user owns the send transaction
  //             contractId: currUserWallet._id,
  //             transactionHash: tx.hash,
  //             amount,
  //             status: "pending",
  //             type: "send",
  //           }),
  //           TransactionModel.create({
  //             senderWalletId: currUserWallet._id,
  //             receiverWalletId: recipientWallet._id,
  //             ownerId: recipient._id, // Recipient owns the receive transaction
  //             contractId: currUserWallet._id,
  //             transactionHash: tx.hash,
  //             amount,
  //             status: "pending",
  //             type: "receive",
  //           }),
  //         ]);

  //         // Start monitoring
  //         startTransactionMonitoring(tx.hash, senderTx._id.toString());
  //         startTransactionMonitoring(tx.hash, receiverTx._id.toString());
  //       })
  //       .catch((error) => {
  //         console.error("Error initiating blockchain transaction:", error);
  //         throw new Error("Failed to initiate transfer");
  //       });

  //     return {
  //       message:
  //         "Funds transfer initiated. You will be notified when the transaction completes.",
  //     };
  //   } catch (error) {
  //     console.error("Error in transferFunds:", error);
  //     throw new Error("Error transferring funds");
  //   }
  // },

  // transferFunds: async (parent, { transferFunds }, { error, user }) => {
  //   if (error) throw error;

  //   try {
  //     const { amount, username } = transferFunds;

  //     // Get wallets
  //     const [currUserWallet, recipient] = await Promise.all([
  //       WalletModel.findOne({ userId: user.id }),
  //       UserModel.findOne({ username }),
  //     ]);

  //     if (!currUserWallet || !recipient) {
  //       throw new Error("Wallet or recipient not found");
  //     }

  //     const recipientWallet = await WalletModel.findOne({
  //       userId: recipient._id,
  //     });

  //     if (!recipientWallet) {
  //       throw new Error("Recipient wallet not found");
  //     }

  //     // Initiate transfer
  //     const tx = await transfer(
  //       contractAddress,
  //       amount,
  //       currUserWallet.privateKey,
  //       recipientWallet.address
  //     );

  //     // Create transactions
  //     const [senderTx, receiverTx] = await Promise.all([
  //       TransactionModel.create({
  //         senderWalletId: currUserWallet._id,
  //         receiverWalletId: recipientWallet._id,
  //         ownerId: user.id,
  //         contractId: currUserWallet._id,
  //         transactionHash: tx.hash,
  //         amount,
  //         status: "pending",
  //         type: "send",
  //         createdAt: new Date(),
  //       }),
  //       TransactionModel.create({
  //         senderWalletId: currUserWallet._id,
  //         receiverWalletId: recipientWallet._id,
  //         ownerId: recipient._id,
  //         contractId: currUserWallet._id,
  //         transactionHash: tx.hash,
  //         amount,
  //         status: "pending",
  //         type: "receive",
  //         createdAt: new Date(),
  //       }),
  //     ]);

  //     if (!senderTx || !receiverTx) {
  //       await TransactionModel.deleteMany({ transactionHash: tx.hash });

  //       throw new Error("Transaction not found");
  //     }

  //     // Start monitoring
  //     await Promise.all([
  //       startTransactionMonitoring(tx.hash, senderTx._id.toString()),
  //       startTransactionMonitoring(tx.hash, receiverTx._id.toString()),
  //     ]);

  //     // Return response
  //     return {
  //       message:
  //         "Funds transfer initiated. You will be notified when the transaction completes.",
  //     };
  //   } catch (error) {
  //     console.error("Error in transferFunds:", error);
  //     throw new Error("Error transferring funds");
  //   }
  // },

  transferFunds: async (parent, { transferFunds }, { error, user }) => {
    if (error) throw error;

    try {
      const { amount, username } = transferFunds;

      // 1. Get required data
      const [senderWallet, recipient, contract] = await Promise.all([
        WalletModel.findOne({ userId: user.id }),
        UserModel.findOne({ username }),
        ContractModel.findOne({ name: "Bitcoin" }),
      ]);

      if (!senderWallet || !recipient || !contract) {
        throw new Error("Wallet, recipient, or contract not found");
      }

      const recipientWallet = await WalletModel.findOne({
        userId: recipient._id,
      });
      if (!recipientWallet) {
        throw new Error("Recipient wallet not found");
      }

      // 2. Create pending transactions in DB
      const [senderTx, receiverTx] = await Promise.all([
        TransactionModel.create({
          senderWalletId: senderWallet._id,
          receiverWalletId: recipientWallet._id,
          ownerId: user.id,
          contractId: contract._id,
          amount,
          status: "pending",
          type: "send",
          createdAt: new Date(),
        }),
        TransactionModel.create({
          senderWalletId: senderWallet._id,
          receiverWalletId: recipientWallet._id,
          ownerId: recipient._id,
          contractId: contract._id,
          amount,
          status: "pending",
          type: "receive",
          createdAt: new Date(),
        }),
      ]);

      // 3. Initiate blockchain transfer
      const tx = await transfer(
        contractAddress,
        amount,
        senderWallet.privateKey,
        recipientWallet.address
      );

      // 4. Update transactions with hash
      await Promise.all([
        TransactionModel.findByIdAndUpdate(senderTx._id, {
          transactionHash: tx.hash,
        }),
        TransactionModel.findByIdAndUpdate(receiverTx._id, {
          transactionHash: tx.hash,
        }),
      ]);

      // 5. Start monitoring
      startTransactionMonitoring(tx.hash, senderTx._id.toString());
      startTransactionMonitoring(tx.hash, receiverTx._id.toString());

      return {
        message:
          "Transfer initiated. You'll be notified when the transaction completes.",
      };
    } catch (error) {
      console.error("Error in transferFunds:", error);
      throw error;
    }
  },

  withdrawFunds: async (parent, { withdrawFunds }, { error, user }) => {
    if (error) throw error;
    const { amount, address } = withdrawFunds;

    try {
      const currUserWallet = await WalletModel.findOne({ userId: user.id });
      if (!currUserWallet) {
        throw new Error("Wallet not found");
      }

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
          // Create withdrawal transaction with owner ID
          const transaction = await TransactionModel.create({
            senderWalletId: currUserWallet._id,
            receiverWalletId: null, // External address
            ownerId: user.id, // Current user owns the withdrawal
            contractId: currUserWallet._id,
            transactionHash: tx.hash,
            amount: amount,
            status: "pending",
            type: "withdraw",
          });

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
  const transaction = await TransactionModel.findByIdAndUpdate(
    transactionId,
    { status: status },
    { new: true }
  ).populate("senderWalletId receiverWalletId");

  const senderWallet = await WalletModel.findById(transaction?.senderWalletId);
  const receiverWallet = await WalletModel.findById(
    transaction?.receiverWalletId
  );

  if (transaction && senderWallet) {
    // Emit to sender
    if (senderWallet.userId) {
      startTransactionMonitoring(transactionId, senderWallet.userId.toString());
    }

    // Emit to receiver
    if (receiverWallet && receiverWallet.userId) {
      startTransactionMonitoring(
        transactionId,
        receiverWallet.userId.toString()
      );
    }
  }
};
