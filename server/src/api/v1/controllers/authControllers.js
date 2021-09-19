import User from "../models/userModel";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  const { email, username, password } = req.body;

  //validation
  const validation = Joi.object({
    username: Joi.string(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).alphanum().required(),
  }).validate(body, { abortEarly: false, allowUnknown: true });
  if (validation.error) {
    res.status(422);
    throw new Error(validation.error);
  }

  const user = await User.findOne({ email: email });
  if (user) {
    res.status(422);
    throw new Error("Account with this email already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedpwd = await bcrypt.hash(password, salt);
  const newuser = await User.create({
    username,
    email,
    password: hashedpwd,
    googleId: null,
    provider: "email",
  });
  res.status(200).json({ message: "User created", data: newuser });
};

export const login = async (req, res) => {};
