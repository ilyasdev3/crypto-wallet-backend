import { generateToken } from "./../utils/tokens";

import { comparePassword, hashPassword } from "./../utils/password";
import { QueryResolvers, MutationResolvers } from "../types/types.generated";
import { UserModel } from "../models/User.model";
import { PostModel } from "../models/Post.model";
import { CommentModel } from "../models/Comment.model";
import { GraphQLError } from "graphql";
import { IContext } from "../types/context.types";
import { createWallet } from "../utils/createWallet";
import { uploadToCloudinary } from "../utils/uploadToCloudinary";
import axios from "axios";

export const commentQueries: QueryResolvers<IContext> = {
  getComments: async (parent, { id }, { error }) => {
    console.log("id", id);
    if (error) throw error;
    const comments = await CommentModel.find({ postId: id })
      .populate({
        path: "user",
        select: "firstName lastName username _id profileImage",
      })
      .sort({ createdAt: -1 });
    console.log("comments", comments);

    return comments as any;
  },
  getUserComments: async (parent, { id }, { error }) => {
    if (error) throw error;
    const user = await UserModel.findById(id);
    if (!user) throw new Error("User not found");
    const comments = await CommentModel.find({ user: id }).populate({
      path: "user",
      select: "firstName lastName username _id profileImage",
    });
    return comments as any;
  },
};

export const commentMutations: MutationResolvers<IContext> = {
  createComment: async (parent, { comment }, { error, user }) => {
    console.log("comment at top", comment);

    if (error) throw error;
    if (!user) throw new Error("User not found");

    const { postId, content } = comment;

    if (!user.id) throw new GraphQLError("you are not loggedin");

    if (!postId || !content)
      throw new GraphQLError(" postId and content are required");

    const createdComment = await CommentModel.create({
      user: user.id,
      postId,
      content,
    });

    // update post stats
    const post = await PostModel.findById(postId);
    if (!post) throw new Error("Post not found");

    const postStats = post.stats;
    postStats.totalComments = postStats.totalComments + 1;
    await PostModel.findByIdAndUpdate(postId, {
      stats: postStats,
    });

    return {
      message: "Comment created successfully",
      comment: createdComment as any,
    };
  },
};
