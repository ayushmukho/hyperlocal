import { Router } from "express";
import expressAsyncHandler from "express-async-handler";
import {
  activateEmail,
  forgotPassword,
  getAccessToken,
  googleLogin,
  login,
  register,
  resetPassword,
} from "../controllers/authControllers.js";

const authRouter = Router();

authRouter
  /**
   * @desc register
   * @route api/auth/register
   * @access Public
   */
  .post("/register", expressAsyncHandler(register))
  /**
   * @desc activate account
   * @route api/auth/activation
   * @access Public
   */
  .post("/activation", expressAsyncHandler(activateEmail))
  /**
   * @desc login
   * @route api/auth/login
   * @access Public
   */
  .post("/login", expressAsyncHandler(login))
  /**
   * @desc google login
   * @route api/auth/login
   * @access Public
   */
  .post("/google_login", expressAsyncHandler(googleLogin))
  /**
   * @desc refreshtoken
   * @route api/auth/refresh_token
   * @access Public
   */
  .get("/refresh_token", expressAsyncHandler(getAccessToken))
  /**
   * @desc forgot password
   * @router api/auth/forgot
   * @access Public
   */
  .post("/forgot", expressAsyncHandler(forgotPassword))
  /**
   * @desc reset password
   * @router api/auth/reset
   * @access Public
   */
  .post("/reset", expressAsyncHandler(resetPassword));

export default authRouter;
