import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    image: {
      type: String,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    googleId: {
      type: String,
    },
    provider: {
      type: String,
      required: true,
    },
    isSeller: {
      type: Boolean,
      required: true,
      default: false,
    },
    sellerCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("User", userSchema);
export default User;
