import { ethers } from "ethers";

export const createWallet = async () => {
  // Generate a new random wallet
  const wallet = ethers.Wallet.createRandom();
  console.log("wallet inside createWallet", wallet);
  console.log("wallet inside createWallet", wallet.privateKey);
  return wallet;
};  
