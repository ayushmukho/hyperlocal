import Product from "../models/productModel.js";

export const allProducts = async (req, res) => {
  const products = await Product.find({});
  res.status(200).json({ message: "Succesful", data: products });
};

export const oneProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.status(200).json({ message: "Succesful", data: product });
  } else {
    res.status(404);
    throw new Error("Product Not found");
  }
};
