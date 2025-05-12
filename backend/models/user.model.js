import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    // required:true,
    default: "",
  },
  avatar: {
    type: String,
  },
  refreshToken: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  accountActivationToken: {
    type: String,
  },
  tenDigitCode: {
    type: String,
    default: "",
  },
  tempStoreEmail: {
    type: String,
    default: "",
  },
});

export const User = mongoose.model("User", userSchema);
