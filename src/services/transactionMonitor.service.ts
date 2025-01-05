// src/services/transactionMonitor.service.ts
import { Server } from "socket.io";
import { checkTransactionStatus } from "../utils/checkTransaction.utils";
import { TransactionModel } from "../models/Transaction.model";
import { WalletModel } from "../models/Wallet.model";
import cron from "node-cron";

let io: Server;
const monitoringTasks = new Map();

export const initializeSocketIO = (socketIO: Server) => {
  io = socketIO;
};

export const startTransactionMonitoring = (
  transactionHash: string,
  transactionId: string
) => {
  // Prevent duplicate monitoring
  if (monitoringTasks.has(transactionHash)) {
    console.log(`Already monitoring transaction: ${transactionHash}`);
    return;
  }

  console.log(`Starting monitoring for transaction: ${transactionHash}`);

  const task = cron.schedule("*/30 * * * * *", async () => {
    try {
      // First check if transaction still exists and is pending
      const transaction = await TransactionModel.findById(transactionId)
        .populate("senderWalletId")
        .populate("receiverWalletId");

      if (!transaction) {
        console.log(
          `Transaction ${transactionId} not found, stopping monitoring`
        );
        stopMonitoring(transactionHash);
        return;
      }

      // Don't check completed or failed transactions
      if (transaction.status !== "pending") {
        console.log(
          `Transaction ${transactionHash} is ${transaction.status}, stopping monitoring`
        );
        stopMonitoring(transactionHash);
        return;
      }

      // Check blockchain status
      const txStatus = await checkTransactionStatus(transactionHash);
      console.log(`Transaction ${transactionHash} status: ${txStatus}`);

      if (!txStatus) {
        console.log(`Unable to get status for transaction ${transactionHash}`);
        return;
      }

      if (txStatus === "confirmed" || txStatus === "failed") {
        const newStatus = txStatus === "confirmed" ? "completed" : "failed";
        console.log(`Transaction ${transactionHash} is ${newStatus}`);

        try {
          // Update transaction status
          await TransactionModel.findByIdAndUpdate(transactionId, {
            status: newStatus,
          });

          // Get wallet information
          const [senderWallet, receiverWallet] = await Promise.all([
            transaction.senderWalletId
              ? WalletModel.findById(transaction.senderWalletId)
              : null,
            transaction.receiverWalletId
              ? WalletModel.findById(transaction.receiverWalletId)
              : null,
          ]);

          // Prepare notification payload
          const notificationPayload = {
            transactionId: transaction._id.toString(),
            status: newStatus,
            amount: transaction.amount,
            hash: transactionHash,
            timestamp: Date.now(),
          };

          // Notify sender if wallet exists
          if (senderWallet?.userId) {
            io.to(`user:${senderWallet.userId}`).emit("transactionUpdate", {
              ...notificationPayload,
              type: "send",
            });
          }

          // Notify receiver if wallet exists and it's a transfer
          if (receiverWallet?.userId && transaction.type === "receive") {
            io.to(`user:${receiverWallet.userId}`).emit("transactionUpdate", {
              ...notificationPayload,
              type: "receive",
            });
          }
        } catch (error) {
          console.error(`Error updating transaction status: ${error.message}`);
        }

        // Stop monitoring regardless of notification success
        stopMonitoring(transactionHash);
      }
    } catch (error) {
      console.error(`Error monitoring transaction ${transactionHash}:`, error);
      // Don't stop monitoring on error unless it's a critical failure
      if (
        error.message.includes("not found") ||
        error.message.includes("invalid transaction")
      ) {
        stopMonitoring(transactionHash);
      }
    }
  });

  monitoringTasks.set(transactionHash, task);
};

const stopMonitoring = (transactionHash: string) => {
  const task = monitoringTasks.get(transactionHash);
  if (task) {
    task.stop();
    monitoringTasks.delete(transactionHash);
    console.log(`Stopped monitoring transaction: ${transactionHash}`);
  }
};

// Utility to check monitoring status
export const getMonitoringStatus = (transactionHash: string) => {
  return monitoringTasks.has(transactionHash);
};

// Cleanup function to stop all monitoring tasks
export const cleanupAllMonitoring = () => {
  for (const [hash, task] of monitoringTasks) {
    task.stop();
    console.log(`Cleaned up monitoring for transaction: ${hash}`);
  }
  monitoringTasks.clear();
};
