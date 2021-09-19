import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import vars from "../../../config/vars.js";
import Joi from "joi";

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
