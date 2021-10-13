import mongoose from "mongoose";

const sellerApplicationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const SellerApplication = mongoose.model(
  "SellerApplication",
  sellerApplicationSchema
);
export default SellerApplication;
