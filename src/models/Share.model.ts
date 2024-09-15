import { Schema, model } from "mongoose";
import { ShareDocument, ShareModel } from "../types/mongoose.gen";

const shareSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true }, // Reference to User model
  postId: { type: Schema.Types.ObjectId, ref: "Post", required: true }, // Reference to Post model
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const ShareModel: ShareModel = model<ShareDocument, ShareModel>(
  "Share",
  shareSchema
);

export { ShareModel };
