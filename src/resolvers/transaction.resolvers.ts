import { UserModel } from "../models/User.model";
import { WalletModel } from "../models/Wallet.model";
import { TransactionModel } from "../models/Transaction.model";
import { QueryResolvers, MutationResolvers } from "../types/types.generated";
import { IContext } from "../types/context.types";
import { GraphQLError } from "graphql";
import { PipelineStage } from "mongoose";

export const transactionQueries: QueryResolvers<IContext> = {
  getUserTransactions: async (parent, { input }, { user, error }) => {
    if (error) throw error;
    if (!user) throw new GraphQLError("User not found");

    try {
      const transactions = await TransactionModel.find({
        ownerId: user.id,
        status: input.type,
      });

      return transactions as any;
    } catch (error) {
      console.error("Error fetching transactions:", error);
      throw new GraphQLError("Failed to fetch transactions");
    }
  },
};

export const transactionMutations: MutationResolvers<IContext> = {};
