import { Schema, model } from "mongoose";

const postSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  isVerified: { type: Boolean, required: true, default: false },
  community: { type: String, required: true },
  user: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Post = model("Post", postSchema);

export default Post;
