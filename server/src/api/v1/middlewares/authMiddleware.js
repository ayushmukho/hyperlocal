import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import vars from "../../../config/vars.js";

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token) {
    jwt.verify(token, vars.accessToken, async (err, decodedToken) => {
      if (err) {
        res.status(422).json({ message: "Invalid Token" });
      } else {
        const user = await User.findById(decodedToken.userId);
        req.user = user;
        next();
      }
    });
  } else {
    res.status(422);
    throw new Error("Access Denied");
  }
};

export const isAdmin = (req, res, next) => {
  if (!req.user.isAdmin) {
    res.status(422);
    throw new Error("Admin resources, Access Denied");
  }
  next();
};

export const isSeller = (req, res, next) => {
  if (!req.user.isSeller) {
    res.status(422);
    throw new Error("Seller resources, Access Denied");
  }
  next();
};
