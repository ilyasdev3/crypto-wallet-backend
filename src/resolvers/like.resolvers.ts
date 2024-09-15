import { generateToken } from "./../utils/tokens";

import { comparePassword, hashPassword } from "./../utils/password";
import { QueryResolvers, MutationResolvers } from "../types/types.generated";
import { UserModel } from "../models/User.model";
import { PostModel } from "../models/Post.model";
import { LikeModel } from "../models/Like.model";
import { GraphQLError } from "graphql";
import { IContext } from "../types/context.types";
import { createWallet } from "../utils/createWallet";
import { uploadToCloudinary } from "../utils/uploadToCloudinary";
import axios from "axios";

export const likeQueries: QueryResolvers<IContext> = {
  getUserLikes: async (parent, { id }, { error }) => {
    if (error) throw error;
    const user = await UserModel.findById(id);
    if (!user) throw new Error("User not found");
    const likes = await LikeModel.find({ userId: id });
    return likes as any;
  },
  getPostLikes: async (parent, { id }, { error }) => {
    if (error) throw error;
    const post = await PostModel.findById(id);
    if (!post) throw new Error("Post not found");
    const likes = await LikeModel.find({ postId: id });
    return likes as any;
  },
};

export const likeMutations: MutationResolvers<IContext> = {
  createLike: async (parent, { like }, { error, user }) => {
    console.log("user at top", user);
    console.log("like at top", like);
    if (error) throw error;
    if (!user) throw new Error("User not found");
    const { userId, postId } = like;
    if (!userId || !postId)
      throw new GraphQLError("UserId and postId are required");
    const existingLike = await LikeModel.findOne({ userId, postId });
    if (existingLike) {
      // REMOVE LIKE
      await LikeModel.findByIdAndDelete(existingLike._id);
    } else {
      // ADD LIKE
      const newLike = await new LikeModel(like).save();
      return {
        message: "Like created successfully",
      };
    }
  },
};
