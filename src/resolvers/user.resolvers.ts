import { generateToken } from "./../utils/tokens";
import { comparePassword, hashPassword } from "./../utils/password";
import { QueryResolvers, MutationResolvers } from "../types/types.generated";
import { UserModel } from "../models/User.model";
import { WalletModel } from "../models/Wallet.model";
import { PostModel } from "../models/Post.model";
import { GraphQLError } from "graphql";
import { IContext } from "../types/context.types";
import { createWallet } from "../utils/createWallet";
import { uploadToCloudinary } from "../utils/uploadToCloudinary";
import mongoose from "mongoose";

export const userQueries: QueryResolvers<IContext> = {
  me: async (parent, __, { user, error }) => {
    if (error) throw error;
    console.log("user", user);

    const currentUser = await UserModel.findById(user.id);
    // console.log("user", currentUser);
    if (!currentUser) throw new Error("User not found");
    // console.log("user", currentUser);
    return currentUser as any;
  },
  getUser: async (parent, { id }, { error }) => {
    if (error) throw error;
    const user = await UserModel.findById(id);
    if (!user) throw new Error("User not found");
    return user as any;
  },

  getUserFollowing: async (parent, { id }, { error }) => {
    if (error) throw error;

    const findUser = await UserModel.findById(id).lean();
    if (!findUser) throw new Error("User not found");

    if (findUser.following && findUser.following.length > 0) {
      const followingUsers = await Promise.all(
        findUser.following.map(async (followingId) => {
          const followingUser = await UserModel.findById(followingId);
          return followingUser;
        })
      );
      return followingUsers.filter(Boolean) as any[];
    }
    return [];
  },

  getUserFollowers: async (parent, { id }, { error }) => {
    if (error) throw error;

    const findUser = await UserModel.findById(id);
    if (!findUser) throw new Error("User not found");

    if (findUser.followers && findUser.followers.length > 0) {
      const followersUsers = await Promise.all(
        findUser.followers.map(async (followerId) => {
          const followerUser = await UserModel.findById(followerId);
          return followerUser;
        })
      );
      return followersUsers.filter(Boolean) as any[];
    }
    return [];
  },

  getFollowingPosts: async (parent, __, { error, user }) => {
    if (error) throw error;

    const findUser = await UserModel.findById(user.id);
    if (!findUser) throw new Error("User not found");
    if (findUser.following && findUser.following.length > 0) {
      const followingUsers = await Promise.all(
        findUser.following.map(async (followingId) => {
          const followingUser = await UserModel.findById(followingId);
          return followingUser;
        })
      );
      const posts = await PostModel.find({
        userId: { $in: followingUsers },
      }).populate({
        path: "userId",
        select: "firstName lastName username _id profileImage",
      });
      return posts as any;
    }
    return [];
  },
  getUserWithName: async (parent, { username }, { error }) => {
    if (error) throw error;
    const user = await UserModel.findOne({ username: username });
    if (!user) throw new GraphQLError("User not found");

    return {
      user: user as any,
      message: "User found successfully",
    };
  },
  getTopUsers: async (parent, { limit = 5 }, { error }) => {
    if (error) throw error;

    try {
      // Find users and sort by number of followers in descending order
      const users = await UserModel.aggregate([
        {
          $addFields: {
            followersCount: { $size: { $ifNull: ["$followers", []] } },
          },
        },
        {
          $sort: { followersCount: -1 },
        },
        {
          $limit: limit,
        },
        {
          $project: {
            _id: 1,
            id: "$_id",
            firstName: 1,
            lastName: 1,
            username: 1,
            email: 1,
            profileImage: 1,
            bio: 1,
            followers: 1,
            following: 1,
            isVerified: 1,
            createdAt: 1,
            updatedAt: 1,
          },
        },
      ]);

      console.log("users here", users);

      return users;
    } catch (error) {
      console.error("Error fetching top users:", error);
      throw new GraphQLError("Failed to fetch top users");
    }
  },
};

export const userMutations: MutationResolvers = {
  createUser: async (parent, { user }) => {
    console.log("user at top", user);
    console.log("profile image", user.profileImage);

    if (!user.username || !user.password)
      throw new GraphQLError("Username and password are required");
    if (user.username.length < 5 || user.username.length > 20)
      throw new GraphQLError("Username must be between 5 and 20 characters");
    if (user.password.length < 8 || user.password.length > 20)
      throw new GraphQLError("Password must be between 8 and 20 characters");

    //  regex to username
    if (!user.username.match(/^[a-zA-Z0-9_]+$/)) {
      throw new GraphQLError(
        "Username can only contain letters, numbers, and underscores"
      );
    }

    // if (
    //   !user.password.match(
    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    //   )
    // ) {
    //   throw new GraphQLError(
    //     "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    //   );
    // }

    const existingUser = await UserModel.findOne({ username: user.username });
    if (existingUser) throw new GraphQLError("Username already exists");

    // Extract file from FormData and upload to Cloudinary
    let profileImageUrl = null;
    if (user.profileImage) {
      profileImageUrl = await uploadToCloudinary(user.profileImage);
      console.log("profileImageUrl", profileImageUrl);

      user.profileImage = profileImageUrl;
    }

    const pass = await hashPassword(user.password);
    user.password = pass;

    console.log("user", user);

    const newUser = await new UserModel(user).save();

    if (!newUser) throw new Error("Error creating user");

    const etherWallet = await createWallet();

    // create user wallet if not exists
    const wallet = await new WalletModel({
      userId: newUser._id,
      address: etherWallet.address,
      privateKey: etherWallet.privateKey,
      publicKey: etherWallet.publicKey,
      mnemonic: etherWallet.mnemonic,
      balance: "0",
      createdAt: new Date(),
      updatedAt: new Date(),
    }).save();

    const token = generateToken(newUser);
    console.log("token", token);

    return {
      message: "User created successfully",
      token: token,
    };
  },
  checkUsername: async (parent, { username }) => {
    if (!username) throw new GraphQLError("Please enter username");
    if (username.length < 5 || username.length > 20)
      throw new GraphQLError("Username must be between 5 and 20 characters");
    if (!username.match(/^[a-zA-Z0-9_]+$/))
      throw new GraphQLError(
        "Username can only contain letters, numbers, and underscores"
      );

    const existingUser = await UserModel.findOne({ username: username });
    if (existingUser) throw new GraphQLError("Username already exists");
    return "Username available";
  },
  loginUser: async (parent, { user }) => {
    // console.log("user at top", user);
    const { username, password } = user;

    console.log("username", username);
    console.log("password", password);

    if (!username || !password)
      throw new GraphQLError("Username and password are required");

    const existingUser = await UserModel.findOne({ username: username });

    // console.log("existingUser", existingUser);

    if (!existingUser) throw new GraphQLError("User not found");

    const isPasswordCorrect = await comparePassword(
      password,
      existingUser.password
    );
    console.log("isPasswordCorrect", isPasswordCorrect);
    if (!isPasswordCorrect) throw new GraphQLError("Incorrect password");

    const token = generateToken(existingUser);

    return {
      message: "Login successful",
      token: token,
    };
  },
  updateUser: async (parent, { user }, { user: currentUser }) => {
    console.log("user at top in update", user);
    if (!user) throw new GraphQLError("User not found");

    if (!currentUser._id) throw new GraphQLError("User not found");

    const existingUser = await UserModel.findById(currentUser._id);
    console.log("existingUser in update", existingUser);
    if (!existingUser) throw new GraphQLError("User not found");

    if (user.profileImage) {
      user.profileImage = await uploadToCloudinary(user.profileImage);
      console.log("profileImage", user.profileImage);
      user.profileImage = user.profileImage.replace("https://", "");
      console.log("profileImage", user.profileImage);
    }
    if (user.coverImage) {
      user.coverImage = await uploadToCloudinary(user.coverImage);
      console.log("coverImage", user.coverImage);
      user.coverImage = user.coverImage.replace("https://", "");
      console.log("coverImage", user.coverImage);
    }

    const updatedUser = await UserModel.findByIdAndUpdate(
      currentUser._id,
      user,
      {
        new: true,
        runValidators: true,
      }
    );

    return "User updated successfully";
  },
  followUnfollowUser: async (parent, { userId }, { user, error }) => {
    if (error) throw error;
    console.log("userId", userId);
    console.log("user", user);

    if (!user) throw new Error("User not found");

    const currentUser = await UserModel.findById(user.id);
    if (!currentUser) throw new Error("User not found");

    const userToFollow = await UserModel.findById(userId);
    if (!userToFollow) throw new Error("User not found");

    const userObjectId = new mongoose.Types.ObjectId(userId);

    if (currentUser.following.includes(userObjectId)) {
      // REMOVE FOLLOW
      await UserModel.findByIdAndUpdate(currentUser._id, {
        $pull: { following: userObjectId },
      });

      await UserModel.findByIdAndUpdate(userToFollow._id, {
        $pull: { followers: currentUser._id },
      });

      return "Unfollowed successfully";
    } else {
      // ADD FOLLOW
      await UserModel.findByIdAndUpdate(currentUser._id, {
        $push: { following: userObjectId },
      });

      await UserModel.findByIdAndUpdate(userToFollow._id, {
        $push: { followers: currentUser._id },
      });
      return "Followed successfully";
    }
  },
};
