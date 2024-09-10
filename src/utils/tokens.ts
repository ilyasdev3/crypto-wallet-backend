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

export const verifyToken = async (token: string) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      id: string;
      username: string;
    };

    const user = await UserModel.findById(decoded.id);
    if (!user) {
      throw new Error("User not found");
    }
    return {
      id: decoded.id,
      username: decoded.username,
    };
  } catch (error) {
    throw new Error("Token verification failed");
  }
};
