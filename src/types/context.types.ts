import { GraphQLError } from 'graphql';
import { User } from './types.generated';
export interface IContext {
 user :User | null;
 error: GraphQLError | null;
}