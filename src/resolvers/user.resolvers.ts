import { generateToken } from "./../utils/tokens";
import { hashPassword } from "./../utils/password";
import { QueryResolvers, MutationResolvers } from "../types/types.generated";
import { UserModel } from "../models/User.model";
import { WalletModel } from "../models/Wallet.model";
import { GraphQLError } from "graphql";
import { IContext } from "../types/context.types";
import { createWallet } from "../utils/createWallet";
import { uploadToCloudinary } from "../utils/uploadToCloudinary";

export const userQueries: QueryResolvers<IContext> = {
  me: async (parent, __, { user, error }) => {
    if (error) throw error;
    return user as any;
  },
  getUser: async (parent, { id }, { error }) => {
    if (error) throw error;
    const user = await UserModel.findById(id);
    if (!user) throw new Error("User not found");
    return user as any;
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
};
