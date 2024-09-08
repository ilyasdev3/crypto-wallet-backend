import { Resolvers } from "../types/types.generated";
import {userQueries, userMutations} from "./user.resolvers";

export const resolvers:Resolvers = {
    Query: {
        ...userQueries
    },
    Mutation: {
        ...userMutations
    }
};

