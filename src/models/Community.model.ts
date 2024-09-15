import { Schema, model } from "mongoose";

const communitySchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  isVerified: { type: Boolean, required: true, default: false },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true }, // Reference to User model
  profileImage: { type: String },
  coverImaage: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const CommunityModel = model("Community", communitySchema);

export default CommunityModel;
