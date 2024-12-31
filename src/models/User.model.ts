import { UserDocument, UserModel, UserSchema } from "./../types/mongoose.gen";
import { Schema, model } from "mongoose";

const userSchema: UserSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  username: { type: String, unique: true },
  password: { type: String, required: true },
  email: { type: String },
  phone: { type: String },
  profileImage: { type: String },
  coverImage: { type: String, required: false },
  address: { type: String },
  isActive: { type: Boolean, default: true },
  bio: { type: String },
  followers: { type: [Schema.Types.ObjectId], ref: "User" },
  following: { type: [Schema.Types.ObjectId], ref: "User" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const UserModel: UserModel = model<UserDocument, UserModel>("User", userSchema);

export { UserModel };
