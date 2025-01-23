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

userSchema.index({ username: 1 }, { unique: true });
userSchema.index({ email: 1 }, { unique: true });

//  enterpriseSchema.index({ email: 1 }, { unique: true })

// enterpriseSchema.index({ isActive: 1, 'location.country': 1 })

//  employeeSchema.index({ enterprise: 1 })

// employeeSchema.index({ enterprise: 1, employeId: 1 }, { unique: true })

// employeeSchema.index({ enterprise: 1, email: 1 }, { unique: true })

//  documentCommentSchema.index({ document: 1, createdAt: -1 })

//  projectContractorSchema.index({ enterprise: 1, email: 1 }, { unique: true })

// projectContractorSchema.index({ status: 1 })

// dmsUserSchema.index({ enterprise: 1, userName: 1 }, { unique: true })

const UserModel: UserModel = model<UserDocument, UserModel>("User", userSchema);

export { UserModel };
