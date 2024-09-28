import { ethers } from "ethers";
import  contractABI  from "./contractABI.json";


// Define the provider with network details
const provider = new ethers.providers.JsonRpcProvider(
  "https://rpc.holesky.ethpandaops.io"
);


// Sample function to get wallet balance
export const getWalletBalance = async (
  contractAddress: string,
  privateKey: string
) => {
  try {
    const wallet = new ethers.Wallet(privateKey, provider);
    console.log("Wallet inside getWalletBalance:", wallet.address);

    // Ensure contract initialization with wallet
    const contractWithWallet = new ethers.Contract(
      contractAddress,
      contractABI,
      wallet
    );
    

    // Fetch the balance
    const balance = await contractWithWallet.balanceOf(wallet.address);
    console.log("Balance:", ethers.utils.formatEther(balance));

    return ethers.utils.formatEther(balance);
  } catch (error) {
    console.error("Error in getWalletBalance:", error);
    return null; // Return null or throw error based on requirement
  }
};


export const transfer = async (
  contractAddress: any,
  amount: any,
  privateKey: any,
  address: any
) => {

  console.log("privateKey in transfer:", privateKey);
  console.log("address in transfer:", address);
  console.log("amount in transfer:", amount);
  
  const wallet = new ethers.Wallet(privateKey, provider);
  const contract = new ethers.Contract(contractAddress, contractABI, wallet);
  const tx = await contract.transfer(address, ethers.utils.parseEther(amount));
  console.log("tx in transfer:", tx);
  
  // await tx.wait();

  const getBalance = await getWalletBalance(contractAddress, privateKey);
  console.log("getBalance in transfer:", getBalance);
  
  
  return tx;
};



