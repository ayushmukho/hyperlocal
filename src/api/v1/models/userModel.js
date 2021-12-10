import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    avatar: {
      type: String,
      default: "https://ui-avatars.com/api/?name=John+Doe",
    },
    username: {
      type: String,
      required: [true, "Please enter your name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
    },
    // isVerified: {
    //   type: Boolean,
    //   default: false,
    // },
    // googleId: {
    //   type: String,
    // },
    // provider: {
    //   type: String,
    //   required: true,
    // },
    // role: {
    //   type: number,
    //   required: true,
    //   default: 0,
    // },
    isSeller: {
      type: Boolean,
      required: true,
      default: false,
    },
    shop: {
      name: { type: String },
      icon: {
        type: String,
        default: "https://ui-avatars.com/api/?name=John+Doe",
      },
      banner: {
        type: String,
        default:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.TzjRVXFct2fZJCboYmxclAHaCP%26pid%3DApi&f=1",
      },
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
