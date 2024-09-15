import { Resolvers } from "../types/types.generated";
import { postMutations, postQueries } from "./post.resolvers";
import { userQueries, userMutations } from "./user.resolvers";
import { walletQueries, walletMutations } from "./wallet.resolvers";

export const resolvers: Resolvers = {
  Query: {
    ...userQueries,
    ...walletQueries,
    ...postQueries,
  },
  Mutation: {
    ...userMutations,
    ...walletMutations,
    ...postMutations,
  },
};
