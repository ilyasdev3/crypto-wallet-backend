import jwt from "jsonwebtoken";
import { IContext } from "../types/context.types";
import { GraphQLError } from "graphql";
import { UserModel } from "../models/User.model";
export const authMiddleware = async (token: string): Promise<IContext> => {
  if (!token) {
    return {
      error: new GraphQLError("You are not authorized to access this resource"),
      user: null,
    };
  }
  try {
    const { id } = jwt.verify(token, "secret") as any;
    if (!id) {
      return {
        error: new GraphQLError(
          "You are not authorized to access this resource"
        ),
        user: null,
      };
    }
    const user: any = await UserModel.findById(id);
    if (!user) {
      return {
        error: new GraphQLError(
          "You are not authorized to access this resource"
        ),
        user: null,
      };
    }
    return {
      error: null,
      user,
    };
  } catch (error) {
    return {
      error: new GraphQLError("You are not authorized to access this resource"),
      user: null,
    };
  }
};
