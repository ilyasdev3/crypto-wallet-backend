import { UserModel } from "../models/User.model";
import { WalletModel } from "../models/Wallet.model";
import { TransactionModel } from "../models/Transaction.model";

import { QueryResolvers, MutationResolvers } from "../types/types.generated";
import { IContext } from "../types/context.types";
import { GraphQLError } from "graphql";

export const transactionQueries: QueryResolvers<IContext> = {
  getUserTransactions: async (parent, _, { user, error }) => {
    if (error) throw error;
    if (!user) throw new Error("User not found");

    console.log("user", user);

    const userWallet = await WalletModel.findOne({ userId: user.id });
    if (!userWallet) throw new Error("Wallet not found");
    console.log("userWallet", userWallet);

    // Query transactions involving the user's wallet
    const transactions = await TransactionModel.aggregate([
      {
        $match: {
          $or: [
            { senderWalletId: userWallet._id },
            { receiverWalletId: userWallet._id },
          ],
        },
      },
      {
        $addFields: {
          priority: {
            $cond: {
              if: { $eq: ["$receiverWalletId", userWallet._id] },
              then: 1, // Higher priority for receiving transactions
              else: 0, // Lower priority for sending transactions
            },
          },
        },
      },
      {
        $sort: {
          priority: -1, // Prioritize receiving transactions for receiver
          createdAt: -1, // Order by the most recent transaction within priority
        },
      },
      {
        $group: {
          _id: "$transactionHash", // Group by transaction hash
          transaction: { $first: "$$ROOT" }, // Pick the first document in each group
        },
      },
      {
        $replaceRoot: { newRoot: "$transaction" }, // Flatten the grouped result
      },
    ]);

    console.log("transactions", transactions);

    return transactions as any;
  },
};

export const transactionMutations: MutationResolvers<IContext> = {};
