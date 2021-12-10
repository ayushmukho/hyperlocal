import Category from "../models/categoryModel.js";

export const getAllCategories = async (req, res) => {
  const categories = await Category.find({});
  res.status(200).json({ message: "Successful", data: categories });
};

export const createCategory = async (req, res) => {
  const { name, description } = req.body;
  const newCategory = await Category.create({
    user: req.user._id,
    name,
    description,
  });
  res.status(200).json({ message: "Category created", data: newCategory });
};

export const updateCategory = async (req, res) => {
  const updatedCategory = await Category.updateOne(
    { _id: req.params.id },
    req.body
  );
  res.status(200).json({ message: "Category updated", data: updatedCategory });
};

export const deleteCategory = async (req, res) => {
  const deletedCategory = await Category.deleteOne({ _id: req.params.id });
  res.status(200).json({ message: "Category deleted", data: deletedCategory });
};
