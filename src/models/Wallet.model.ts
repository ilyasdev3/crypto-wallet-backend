
import { Schema, model } from "mongoose";
import { WalletDocument, WalletModel, WalletSchema } from "./../types/mongoose.gen";


 const walletSchema :WalletSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to User model
    address: { type: String, required: true, unique: true },
    privateKey: { type: String, required: true },
    publicKey: { type: String, required: true },
    mnemonic: { type: Object, required: false }, // Optional field
    balance: { type: String, required: false, default: '0' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  });
  
  const WalletModel:WalletModel = model<WalletDocument, WalletModel>("Wallet", walletSchema);

  export {WalletModel}