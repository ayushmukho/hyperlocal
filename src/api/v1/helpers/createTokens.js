import vars from "../../../config/vars.js";
import jwt from "jsonwebtoken";

export const createActivationToken = (payload) => {
  return jwt.sign(payload, vars.activationToken, { expiresIn: "5m" });
};

export const createAccessToken = (payload) => {
  return jwt.sign(payload, vars.accessToken, { expiresIn: "15m" });
};

export const createRefreshToken = (payload) => {
  return jwt.sign(payload, vars.refreshToken, { expiresIn: "7d" });
};
