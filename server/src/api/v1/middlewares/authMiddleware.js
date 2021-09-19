import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import vars from "../../../config/vars.js";

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token) {
    jwt.verify(token, vars.jwtSecret, async (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: "Invalid Token" });
      } else {
        const user = await User.findById(decodedToken.userId);
        req.user = user;
        next();
      }
    });
  } else {
    res.status(401);
    throw new Error("Access Denied");
  }
};
