// services/transaction.service.ts
import { UserModel } from "../models/User.model";
import { WalletModel } from "../models/Wallet.model";
import { TransactionModel } from "../models/Transaction.model";

export const createTransaction = async (
  senderWalletId: string,
  receiverWalletId: string,
  contractId: string,
  transactionHash: string,
  amount: number,
  status: string
) => {
  const transaction = new TransactionModel({
    senderWalletId: senderWalletId,
    receiverWalletId: receiverWalletId,
    contractId: contractId,
    transactionHash: transactionHash,
    amount: amount,
    status: status,
  });
  await transaction.save();
  return transaction;
};

export const getTransactions = async (walletId: string) => {
  const transactions = await TransactionModel.find({
    $or: [{ senderWalletId: walletId }, { receiverWalletId: walletId }],
  });
  return transactions;
};

export const updateTransaction = async (
  transactionId: string,
  status: string
) => {
  const transaction = await TransactionModel.findById(transactionId);
  if (!transaction) throw new Error("Transaction not found");

  const updatedTransaction = await TransactionModel.findByIdAndUpdate(
    transactionId,
    { status: status },
    { new: true }
  );
  return updatedTransaction;
};
