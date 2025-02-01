// src/utils/checkTransaction.utils.ts
import { ethers } from "ethers";

const provider = new ethers.providers.JsonRpcProvider(
  "https://rpc.holesky.ethpandaops.io"
);
export const checkTransaction = async (transactionHash: string) => {
  const tx = await provider.getTransaction(transactionHash);
  console.log("tx", tx);

  if (tx) {
    return tx;
  } else {
    throw new Error("Transaction not found");
  }
};

export const checkTransactionStatus = async (
  transactionHash: string
): Promise<"pending" | "confirmed" | "failed" | null> => {
  try {
    if (!transactionHash) {
      console.error("No transaction hash provided");
      return null;
    }

    // Get transaction
    const tx = await provider.getTransaction(transactionHash);
    if (!tx) {
      console.error("Transaction not found");
      return null;
    }

    // Get transaction receipt
    const receipt = await provider.getTransactionReceipt(transactionHash);

    if (!receipt) {
      console.log("Transaction succeeded or pending");
      return "pending";
    }

    // Check status - 1 is success, 0 is failure
    if (receipt.status === 1) {
      console.log(`Transaction ${transactionHash} confirmed`);
      return "confirmed";
    } else {
      console.log(`Transaction ${transactionHash} failed`);
      return "failed";
    }
  } catch (error) {
    console.error("Error checking transaction status:", error);
    return null;
  }
};
