import { Resolvers } from "../types/types.generated";
import { postMutations, postQueries } from "./post.resolvers";
import { userQueries, userMutations } from "./user.resolvers";
import { walletQueries, walletMutations } from "./wallet.resolvers";
import { commentMutations, commentQueries } from "./comment.resolvers";
import { contractQueries, contractMutations } from "./contract.resolvers";
import {
  transactionQueries,
  transactionMutations,
} from "./transaction.resolvers";

export const resolvers: Resolvers = {
  Query: {
    ...userQueries,
    ...walletQueries,
    ...postQueries,
    ...commentQueries,
    ...contractQueries,
    ...transactionQueries,
  },
  Mutation: {
    ...userMutations,
    ...walletMutations,
    ...postMutations,
    ...commentMutations,
    ...contractMutations,
    ...transactionMutations,
  },
};
