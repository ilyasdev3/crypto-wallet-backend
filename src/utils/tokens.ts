import jwt from "jsonwebtoken";
import { UserModel } from "../models/User.model";
import { IContext } from "../types/context.types";

export const generateToken = (user: any): string => {
  const payload = {
    id: user._id,
    username: user.username,
  };

  return jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn: "7d",
  });
};

export const verifyToken = (token: string): IContext => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

    if (typeof decoded === "string") {
      throw new Error("Invalid token");
    }

    return decoded as IContext;
  } catch (error) {
    throw new Error("Token verification failed");
  }
};
