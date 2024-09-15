import { PostDocument, PostModel } from "./../types/mongoose.gen";
import { Schema, model } from "mongoose";

const PostState = new Schema({
  totalLikes: { type: Number, default: 0 },
  totalComments: { type: Number, default: 0 },
  totalShares: { type: Number, default: 0 },
});

const postSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  isVerified: { type: Boolean, required: true, default: false },
  communityId: {
    type: Schema.Types.ObjectId,
    ref: "Community",
  },
  image: { type: String },
  publicId: { type: String },
  stats: PostState,
  likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true }, // Reference to User model
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const PostModel: PostModel = model<PostDocument, PostModel>("Post", postSchema);

export { PostModel };
