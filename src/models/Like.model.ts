import { LikeDocument, LikeModel } from "./../types/mongoose.gen";
import { Schema, model } from "mongoose";

const likeSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true }, // Reference to User model
  postId: { type: Schema.Types.ObjectId, ref: "Post", required: true }, // Reference to Post model
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const LikeModel: LikeModel = model<LikeDocument, LikeModel>("Like", likeSchema);

export { LikeModel };
