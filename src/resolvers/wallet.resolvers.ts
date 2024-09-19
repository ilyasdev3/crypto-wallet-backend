import { generateToken } from "./../utils/tokens";
import { comparePassword, hashPassword } from "./../utils/password";
import { QueryResolvers, MutationResolvers } from "../types/types.generated";
import { UserModel } from "../models/User.model";
import { WalletModel } from "../models/Wallet.model";
import { GraphQLError } from "graphql";
import { IContext } from "../types/context.types";
import { createWallet } from "../utils/createWallet";
import { uploadToCloudinary } from "../utils/uploadToCloudinary";
import axios from "axios";
import { getWalletBalance, transfer } from "../contract/contractMethods";
export const contractAddress = "0x1B5A0792A1B712d855eBa0AE8b477F8F02a549E1";

export const walletQueries: QueryResolvers<IContext> = {
  getWallet: async (parent, __, { user, error }) => {
    console.log("user at top", user);
    console.log("error at top", user.id);

    if (error) throw error;

    console.log("user", user);
    const wallet = await WalletModel.findOne({ userId: user.id });
    console.log("wallet", wallet);

    if (!wallet) throw new Error("Wallet not found");

    const getWallletBalance = await getWalletBalance(
      contractAddress,
      wallet.privateKey
    );
    // console.log("getWalletBalance", getWallletBalance);

    // await transfer(contractAddress, "0.01", wallet.privateKey);

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

export const walletMutations: MutationResolvers = {};
