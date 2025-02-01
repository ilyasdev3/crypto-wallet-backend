import { UserModel } from "../models/User.model";
import { WalletModel } from "../models/Wallet.model";
import { TransactionModel } from "../models/Transaction.model";
import { QueryResolvers, MutationResolvers } from "../types/types.generated";
import { IContext } from "../types/context.types";
import { GraphQLError } from "graphql";
import { PipelineStage } from "mongoose";

export const transactionQueries: QueryResolvers<IContext> = {
  getUserTransactions: async (
    parent,
    { input, pagination },
    { user, error }
  ) => {
    if (error) throw error;
    if (!user) throw new GraphQLError("User not found");

    const { limit = 10, page = 1 } = pagination;

    try {
      const skip = (page - 1) * limit;

      const query = {
        ownerId: user.id,
        status: input.type,
      };
      const [totalItems, transactions] = await Promise.all([
        TransactionModel.countDocuments({ ownerId: user.id }),
        TransactionModel.find(query).skip(skip).limit(limit),
      ]);

      const totalPages = Math.ceil(totalItems / limit);

      return {
        transactions: transactions as any,
        pageInfo: {
          totalItems,
          totalPages,
          currentPage: page,
        },
      };
    } catch (error) {
      console.error("Error fetching transactions:", error);
      throw new GraphQLError("Failed to fetch transactions");
    }
  },
};

export const transactionMutations: MutationResolvers<IContext> = {};

// export const addDefaultSort = (
//   schema: any,
//   options = {
//     field: "createdAt",
//     order: -1,
//     applyToFindOne: false,
//     applyToFind: false,
//   }
// ) => {
//   const { field = "createdAt", order = -1, applyToFindOne = false } = options;

//   if (!schema.get("timestamps")) {
//     schema.set("timestamps", true);
//   }

//   const applySort = function (next: any) {
//     if (!this.options.sort) {
//       this.options.sort = { [field]: order };
//     }
//     next();
//   };

//   schema.pre("find", applySort);

//   if (applyToFindOne) {
//     schema.pre("findOne", applySort);
//     schema.pre("findById", applySort);
//   }
// };
