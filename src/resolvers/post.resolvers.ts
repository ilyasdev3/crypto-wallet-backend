import { generateToken } from "./../utils/tokens";
import { comparePassword, hashPassword } from "./../utils/password";
import { QueryResolvers, MutationResolvers } from "../types/types.generated";
import { UserModel } from "../models/User.model";
import { PostModel } from "../models/Post.model";
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
    const posts = await PostModel.find({ userId: id });
    return posts as any;
  },
  getCommunityPosts: async (parent, { id }, { error }) => {
    if (error) throw error;
    const user = await UserModel.findById(id);
    if (!user) throw new Error("User not found");
    const posts = await PostModel.find({ communityId: id });
    return posts as any;
  },
  getPost: async (parent, { id }, { error }) => {
    if (error) throw error;
    const post = await PostModel.findById(id);
    if (!post) throw new Error("Post not found");
    return post as any;
  },
  getAllPosts: async (parent, { filters }, { error }) => {
    if (error) throw error;

    const query: any = {};
    const { title, content, length } = filters;

    // Apply title filter with regex
    if (title) {
      query.title = { $regex: title, $options: "i" }; // case-insensitive partial match
    }

    // Apply content filter with regex
    if (content) {
      query.content = { $regex: content, $options: "i" };
    }

    // Query posts and populate user and community details
    const posts = await PostModel.find(query)
      .limit(length || 10)
      .populate({
        path: "userId", // Assuming userId references the User model
        select: "firstName lastName username", // Specify the fields to return
      })
      .populate("communityId"); // Keep this if you need communityId as well

    console.log("posts", posts);

    return posts as any;
  },
};

export const postMutations: MutationResolvers<IContext> = {
  createPost: async (parent, { post }, { error, user }) => {
    console.log("user at top", user);
    console.log("post at top", post);

    if (error) throw error;
    if (!user) throw new Error("User not found");

    const { title, content, file } = post;
    if (!title || !content)
      throw new GraphQLError("Title and content are required");

    // Extract file from FormData and upload to Cloudinary
    let profileImageUrl = null;
    if (file) {
      profileImageUrl = await uploadToCloudinary(file);
      console.log("profileImageUrl", profileImageUrl);

      post.file = profileImageUrl;
    }

    // add userId to post
    post.userId = String(user.id);

    const newPost = await new PostModel(post).save();

    return {
      message: "Post created successfully",
    };
  },
};
