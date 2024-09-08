import { UserDocument, UserModel, UserSchema } from './../types/mongoose.gen';
import { Schema, model } from "mongoose";



const userSchema: UserSchema = new Schema({
  firstName: { type: String,  },
  lastName: { type: String,  },
  username: { type: String,  unique: true },
  password: { type: String, required: true },
  email: { type: String, },
  phone: { type: String, },
  address: { type: String,  },
  isVerified: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

 const UserModel:UserModel = model<UserDocument, UserModel>("User", userSchema);

 export {UserModel}

