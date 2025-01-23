import { Schema, model } from "mongoose";
import {
  TransactionDocument,
  TransactionModel,
  TransactionSchema,
} from "./../types/mongoose.gen";

const transactionSchema: TransactionSchema = new Schema({
  senderWalletId: {
    type: Schema.Types.ObjectId,
    ref: "Wallet",
    required: true,
  },
  receiverWalletId: {
    type: Schema.Types.ObjectId,
    ref: "Wallet",
    required: false,
  },
  ownerId: {
    // Add owner field to track who owns this transaction record
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  contractId: {
    type: Schema.Types.ObjectId,
    ref: "Contract",
    required: true,
  },
  transactionHash: {
    type: String,
    required: false,
  },
  amount: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "pending",
  },
  type: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const TransactionModel = model<TransactionDocument, TransactionModel>(
  "Transaction",
  transactionSchema
);

export { TransactionModel };
