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

export const checkTransactionStatus = async (txHash: string) => {
  try {
    const receipt = await provider.waitForTransaction(txHash, 1);
    if (receipt.status === 0) {
      return "failed";
    }
    return "confirmed";
  } catch (error) {
    console.error("Error checking transaction status:", error);
    return "error"; // Handle error scenarios
  }
};

// Example usage
// const txHash = "0x1319e733268497f393a22b5e8c5249ae4943a5cd5e966fb57fa7f44f8c654ac9"; // Example tx hash
// const status = await checkTransactionStatus(txHash);
// console.log("Transaction status:", status);
