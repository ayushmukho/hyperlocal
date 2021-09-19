import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
      default:
        "https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-image.jpg",
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
const Category = mongoose.model("Category", categorySchema);
export default Category;
