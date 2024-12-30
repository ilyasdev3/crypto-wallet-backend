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

    // Query transactions involving the user's wallet, grouped by transactionHash and prioritizing "send"
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
            $cond: { if: { $eq: ["$type", "send"] }, then: 1, else: 0 },
          },
        },
      },
      {
        $sort: {
          priority: -1, // Prioritize "send" type
          createdAt: -1, // Ensure the latest transaction is picked in case of duplicates
        },
      },
      {
        $group: {
          _id: "$transactionHash", // Group by transaction hash
          transaction: { $first: "$$ROOT" }, // Pick the first document in each group (after sorting)
        },
      },
      {
        $replaceRoot: { newRoot: "$transaction" }, // Flatten the grouped result
      },
    ]);

    return transactions as any;
  },
};

export const transactionMutations: MutationResolvers<IContext> = {};
