import { Schema, model } from "mongoose";
import { CommentDocument, CommentModel } from "../types/mongoose.gen";

const commentSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true }, // Reference to User model
  postId: { type: Schema.Types.ObjectId, ref: "Post", required: true }, // Reference to Post model
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const CommentModel: CommentModel = model<CommentDocument, CommentModel>(
  "Comment",
  commentSchema
);

export { CommentModel };
