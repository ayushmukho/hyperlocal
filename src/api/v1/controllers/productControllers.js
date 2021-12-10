import Product from "../models/productModel.js";
import Category from "../models/categoryModel.js";
import User from "../models/userModel.js";

export const allProducts = async (req, res) => {
  const products = await Product.find({});
  res.status(200).json({ message: "Successful", data: products });
};

export const oneProduct = async (req, res) => {
  const product = await Product.findById(req.params.productid);
  if (product) {
    res.status(200).json({ message: "Successful", data: product });
  } else {
    res.status(404);
    throw new Error("Product Not found");
  }
};

export const allProductsByCategory = async (req, res) => {
  const products = await Product.find({ category: req.params.categoryid });
  res.status(200).json({ message: "Successful", data: products });
};

export const allProductsBySeller = async (req, res) => {
  const products = await Product.find({ seller: req.params.sellerid });
  res.status(200).json({ message: "Successful", data: products });
};

export const createProduct = async (req, res) => {
  const { categoryid, name, description, price, countInStock } = req.body;
  const category = await Category.findById(categoryid);
  const product = await Product.create({
    seller: req.user._id,
    category: category._id,
    name,
    description,
    price: +price,
    countInStock: +countInStock,
  });
  res
    .status(200)
    .json({ message: "Product successfully created", data: product });
};

export const updateProduct = async (req, res) => {
  const product = await Product.findById(req.params.productid);
  if (!product) {
    res.status(404);
    throw new Error("Product doesn't exist");
  }
  const seller = await User.findById(product.seller);
  if (seller._id.equals(req.user._id)) {
    const product = await Product.updateOne(
      { _id: req.params.productid },
      req.body
    );
    res
      .status(200)
      .json({ message: "Product successfully updated", data: product });
  } else {
    res.status(401);
    throw new Error("Access Denied");
  }
};

export const deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.productid);
  if (!product) {
    res.status(404);
    throw new Error("Product doesn't exist");
  }
  const seller = await User.findById(product.seller);
  if (seller._id.equals(req.user._id)) {
    const product = await Product.deleteOne({ _id: req.params.productid });
    res
      .status(200)
      .json({ message: "Product successfully deleted", data: product });
  } else {
    res.status(401);
    throw new Error("Access Denied");
  }
};
