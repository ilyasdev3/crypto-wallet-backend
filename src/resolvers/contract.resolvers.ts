import { MutationResolvers } from "./../types/types.generated";
import { UserModel } from "../models/User.model";
import { WalletModel } from "../models/Wallet.model";
import { ContractModel } from "../models/Contract.model";

import { IContext } from "../types/context.types";
import axios from "axios";
import { QueryResolvers } from "../types/types.generated";

// export const contractAddress = "0x080c78d90209bb9bFA0bACff759761cC1FBf35ff";
export const contractAddress = "0x57467aA72c2980CeC0455A489Fe4B1eeB1De4A21";

export const contractQueries: QueryResolvers<IContext> = {
  getContracts: async (parent, __, { error }) => {
    if (error) throw error;

    const contracts = await ContractModel.find({});
    console.log("contracts", contracts);
    return contracts as any;
  },
};

export const contractMutations: MutationResolvers = {
  createContract: async (parent, { contract }, { error, user }) => {
    console.log("user at top", user);
    console.log("contract at top", contract);

    if (error) throw error;
    if (!user) throw new Error("User not found");

    const { name, contractAddress, provider, abi, network, userId } = contract;

    if (!name || !contractAddress || !provider || !abi || !network || !userId)
      throw new Error(
        "Name, contractAddress, provider, abi, network, and userId are required"
      );

    const existingContract = await ContractModel.findOne({ contractAddress });
    console.log("existingContract", existingContract);

    if (existingContract) throw new Error("Contract already exists");

    const stringAbi = JSON.stringify(abi);

    const newContract = await new ContractModel({
      name,
      contractAddress,
      provider,
      abi: stringAbi,
      network,
      userId,
    }).save();

    return {
      message: "Contract created successfully",
    };
  },
};
