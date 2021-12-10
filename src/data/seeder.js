import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./users.js";
import products from "./products.js";
import categories from "./categories.js";
import Order from "../api/v1/models/orderModel.js";
import dbConfig from "../config/dbConfig.js";
import Product from "../api/v1/models/productModel.js";
import User from "../api/v1/models/userModel.js";
import Category from "../api/v1/models/categoryModel.js";

dotenv.config();

dbConfig();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    await Category.deleteMany();

    const createdUsers = await User.insertMany(users);
    const admin = createdUsers[0]._id;
    const seller = createdUsers[1]._id;
    const sampleCategories = categories.map((category) => {
      return {
        ...category,
        admin,
      };
    });
    const createdCategories = await Category.insertMany(sampleCategories);
    const category = createdCategories[0]._id;

    const sampleProducts = products.map((prdt) => {
      return {
        ...prdt,
        seller,
        category,
      };
    });
    await Product.insertMany(sampleProducts);
    console.log(`Data Imported`.green.inverse);
    process.exit();
  } catch (err) {
    console.log(`Error: ${err.message}`.red.inverse);
    process.exit(1);
  }
};

const destroytData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    await Category.deleteMany();

    console.log(`Data Destroyed`.green.inverse);
    process.exit();
  } catch (err) {
    console.log(`Error: ${err.message}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroytData();
} else {
  importData();
}
