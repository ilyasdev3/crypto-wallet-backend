import { ContractDocument, ContractModel } from "./../types/mongoose.gen";
import { Schema, model } from "mongoose";

const contractSchema = new Schema({
  name: { type: String, required: true },
  contractAddress: { type: String, required: true, unique: true },
  provider: { type: String, required: true },
  abi: { type: String, required: false },
  network: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const ContractModel = model<ContractDocument, ContractModel>(
  "Contract",
  contractSchema
);

export { ContractModel };
