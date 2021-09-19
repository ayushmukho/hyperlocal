import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import vars from "../../../config/vars.js";
import Joi from "joi";
import Category from "../models/categoryModel.js";
import SellerApplication from "../models/sellerApplicationModel.js";

export const register = async (req, res) => {
  const { email, username, password } = req.body;

  //validation
  const validation = Joi.object({
    username: Joi.string(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).alphanum().required(),
  }).validate(req.body, { abortEarly: false, allowUnknown: true });
  if (validation.error) {
    res.status(422);
    throw new Error(validation.error);
  }

  const user = await User.findOne({ email: email });
  if (user) {
    res.status(422);
    throw new Error("Account with this email already exists");
  }

  const hashedpwd = await bcrypt.hash(password, 10);
  const newuser = await User.create({
    username,
    email,
    password: hashedpwd,
    googleId: null,
    provider: "email",
  });
  res.status(200).json({ message: "User Created", data: newuser });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (!user) {
    res.status(422);
    throw new Error("Wrong Email");
  }

  const isPassValid = await bcrypt.compare(password, user.password);
  if (!isPassValid) {
    res.status(422);
    throw new Error("Wrong Password");
  }
  const token = jwt.sign(
    { userId: String(user._id), iat: new Date().getTime() },
    vars.jwtSecret,
    { expiresIn: "10d" }
  );
  res
    .status(200)
    .json({ message: "Success", data: { access_token: token, user: user } });
};

export const getAllSellers = async (_req, res) => {
  const sellers = await User.find({ isSeller: true });
  res.status(200).json({ message: "Succesful", data: sellers });
};

export const applySeller = async (req, res) => {
  const { description } = req.body;
  const newApplication = await SellerApplication.create({
    user: req.user._id,
    description,
  });
  res.status(200).json({ message: "Application sent", data: newApplication });
};

export const getAllApplication = async (_req, res) => {
  const applications = await SellerApplication.find({});
  res.status(200).json({ message: "Successful", data: applications });
};

export const approveSeller = async (req, res) => {
  const application = await SellerApplication.findById(req.params.id);
  const userid = application.user;
  await User.updateOne(
    { _id: userid },
    {
      isSeller: true,
    }
  );
  await SellerApplication.deleteOne({ _id: application._id });
  res.status(200).json({ message: "Application approved", data: null });
};

export const rejectSeller = async (req, res) => {
  const application = await SellerApplication.findById(req.params.id);
  await SellerApplication.deleteOne({ _id: application._id });
  res.status(200).json({ message: "Application approved", data: null });
};

export const makeAdmin = async (req, res) => {
  await User.updateOne(
    { _id: req.params.id },
    {
      isAdmin: true,
    }
  );
  res.status(200).json({ message: `User made admin`, data: null });
};
