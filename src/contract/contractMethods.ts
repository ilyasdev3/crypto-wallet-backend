import { ethers } from "ethers";
import contractABI from "./contractABI.json";

const providerUrl =
  "https://eth-holesky.g.alchemy.com/v2/3l1FowDVfzUhd5gaW7-Z_9f_lTOhgXCU";

export const contractAddress = "0x1B5A0792A1B712d855eBa0AE8b477F8F02a549E1";
const provider = new ethers.JsonRpcProvider(providerUrl);

export const getWalletBalance = async (
  contractAddress: any,
  privateKey: any
) => {
  const wallet = new ethers.Wallet(privateKey, provider);
  console.log("wallet inside getWalletBalance", wallet);

  const contract = new ethers.Contract(contractAddress, contractABI, wallet);
  const balance = await contract.balanceOf(wallet.address);
  console.log("balance", balance);
  return ethers.formatEther(balance);
};

export const transfer = async (
  contractAddress: any,
  amount: any,
  privateKey: any
) => {
  const wallet = new ethers.Wallet(privateKey, provider);
  const contract = new ethers.Contract(contractAddress, contractABI, wallet);
  const tx = await contract.transfer(wallet.address, ethers.parseEther(amount));
  await tx.wait();
};
