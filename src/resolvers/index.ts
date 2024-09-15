import { Resolvers } from "../types/types.generated";
import { postMutations, postQueries } from "./post.resolvers";
import { userQueries, userMutations } from "./user.resolvers";
import { walletQueries, walletMutations } from "./wallet.resolvers";
import { commentMutations, commentQueries } from "./comment.resolvers";

export const resolvers: Resolvers = {
  Query: {
    ...userQueries,
    ...walletQueries,
    ...postQueries,
    ...commentQueries,
  },
  Mutation: {
    ...userMutations,
    ...walletMutations,
    ...postMutations,
    ...commentMutations,
  },
};
