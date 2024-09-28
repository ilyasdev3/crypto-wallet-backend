import { generateToken } from "./../utils/tokens";
import { comparePassword, hashPassword } from "./../utils/password";
import { WalletModel } from "../models/Wallet.model";
import { IContext } from "../types/context.types";

import axios from "axios";
import { getWalletBalance, transfer } from "../contract/contractMethods";
import { MutationResolvers, QueryResolvers } from "../types/types.generated";
// export const contractAddress = "0x080c78d90209bb9bFA0bACff759761cC1FBf35ff";
export const contractAddress = "0x57467aA72c2980CeC0455A489Fe4B1eeB1De4A21";

export const walletQueries: QueryResolvers<IContext> = {
  getWallet: async (parent, __, { user, error }) => {

    if (error) throw error;

    const wallet = await WalletModel.findOne({ userId: user.id });
    console.log("wallet", wallet);

    if (!wallet) throw new Error("Wallet not found");

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
    const { amount, address } = transferFunds;
    console.log("amount", amount);
    console.log("address", address);
    try {
      const getWallet = await WalletModel.findOne({ userId: user.id });
      console.log("getWallet", getWallet);
      
      const tx = await transfer(contractAddress, amount, getWallet.privateKey,address);
      if(tx.hash){
      return {
        message: "Funds transferred successfully",
      };
      } 
    } catch (error) {
      console.error("Error in transferFunds:", error);
      throw new Error("Error transferring funds");
    }
  },

};
