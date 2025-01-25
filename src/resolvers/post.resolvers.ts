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

export const postQueries: QueryResolvers<IContext> = {
  getUserPosts: async (parent, { id }, { error }) => {
    if (error) throw error;
    const user = await UserModel.findById(id);
    if (!user) throw new Error("User not found");
    const posts = await PostModel.find({ userId: id })
      .populate({
        path: "userId",
        select: "firstName lastName username _id profileImage",
      })
      .populate({
        path: "communityId",
        select: "name _id",
      });

    return posts as any;
  },
  getCommunityPosts: async (parent, { id }, { error }) => {
    if (error) throw error;
    const user = await UserModel.findById(id);
    if (!user) throw new Error("User not found");
    const posts = await PostModel.find({ communityId: id })
      .populate({
        path: "userId",
        select: "firstName lastName username _id profileImage",
      })
      .populate({
        path: "communityId",
        select: "name _id",
      });

    return posts as any;
  },
  getPost: async (parent, { id }, { error }) => {
    if (error) throw error;
    const post = (await PostModel.findById(id)
      .populate({
        path: "userId",
        select: "firstName lastName username _id profileImage",
      })
      .populate({
        path: "communityId",
        select: "name _id",
      })) as any;

    if (!post) throw new Error("Post not found");
    return post as any;
  },
  getAllPosts: async (parent, { filters }, { error }) => {
    if (error) throw error;

    const query: any = {};
    const { title, content, length } = filters;

    const sort = "asc";

    // Apply title filter with regex
    // if (title) {
    //   query.title = { $regex: title, $options: "i" }; // case-insensitive partial match
    // }

    // Apply content filter with regex
    if (content) {
      query.content = { $regex: content, $options: "i" };
    }

    // Determine sorting order (default: descending by `createdAt`)
    const sortOrder: any = {};

    sortOrder["createdAt"] = -1; // Default to descending by createdAt

    // Query posts and populate user and community details
    const posts = await PostModel.find(query)
      .sort(sortOrder) // Apply sorting
      .limit(length || 10)
      .populate({
        path: "userId", // Assuming userId references the User model
        select: "firstName lastName username _id profileImage",
      })
      .populate("communityId"); // Keep this if you need communityId as well

    return posts as any;
  },
};

export const postMutations: MutationResolvers<IContext> = {
  createPost: async (parent, { post }, { error, user }) => {
    console.log("user at top", user);
    console.log("post at top", post);

    if (error) throw error;
    if (!user) throw new Error("User not found");

    const { title, content, image } = post;
    if (!title || !content)
      throw new GraphQLError("Title and content are required");

    // Extract file from FormData and upload to Cloudinary
    let profileImageUrl = null;
    if (image) {
      profileImageUrl = await uploadToCloudinary(image);
      console.log("profileImageUrl", profileImageUrl);

      post.image = profileImageUrl;
    }

    // add userId to post
    post.userId = String(user.id);

    const newPost = await new PostModel(post).save();

    return {
      message: "Post created successfully",
    };
  },
  doLike: async (parent, { postId }, { error, user }) => {
    if (error) throw error;
    console.log("postId on top", postId);

    try {
      const post = await PostModel.findById(postId);
      if (!post) throw new Error("Post not found");

      const userId = user.id as any;
      console.log("userId:", userId);
      console.log("post:", post);

      // Ensure stats field exists
      const stats = post.stats || {
        totalLikes: 0,
        totalComments: 0,
        totalShares: 0,
      };
      console.log("stats:", stats);

      const isliked = post.likes.includes(userId);
      console.log("isliked", isliked);

      if (isliked) {
        // REMOVE LIKE
        const result = await PostModel.findByIdAndUpdate(postId, {
          $pull: { likes: userId },
          $set: { "stats.totalLikes": stats.totalLikes - 1 || 0 },
        });
        console.log("Remove like result:", result);

        return "Liked removed successfully";
      } else {
        // ADD LIKE
        const result = await PostModel.findByIdAndUpdate(postId, {
          $push: { likes: userId },
          $set: { "stats.totalLikes": stats.totalLikes + 1 || 0 },
        });
        console.log("Add like result:", result);

        return "Liked successfully";
      }
    } catch (error) {
      console.error("Error caught in doLike:", error);
      throw new Error("Error liking post");
    }
  },
};
