import { ethers } from "ethers";

export const createWallet = async () => {
  // Generate a new random wallet
  const wallet = ethers.Wallet.createRandom();
  console.log("wallet inside createWallet", wallet);
const mnemonic = wallet.mnemonic.phrase;
  return wallet;
};  
