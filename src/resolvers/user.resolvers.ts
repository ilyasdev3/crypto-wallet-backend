import { QueryResolvers, MutationResolvers } from "../types/types.generated";
import { UserModel } from "../models/User.model";
import { WalletModel } from "../models/Wallet.model";
import { GraphQLError } from "graphql";
import { IContext } from "../types/context.types";
import { createWallet } from "../utils/createWallet";

export const userQueries: QueryResolvers<IContext> = {
  me: async (parent, __, { user, error }) => {
    if (error) throw error;
    return user as any;
  },
  getUser: async (parent, { id }, { error }) => {
    if (error) throw error;
    const user = await UserModel.findById(id);
    return user as any;
  },
};

export const userMutations: MutationResolvers = {
  createUser: async (parent, { user }) => {
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

    return "User created successfully";
  },
};
