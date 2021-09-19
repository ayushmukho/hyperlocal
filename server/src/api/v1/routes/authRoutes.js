import { Router } from "express";
import expressAsyncHandler from "express-async-handler";
import { login, register } from "../controllers/authControllers.js";

const authRouter = Router();

authRouter
  /**
   * @desc register
   * @route api/auth/register
   * @access Public
   */
  .post("/register", expressAsyncHandler(register))
  /**
   * @desc login
   * @router api/auth/login
   * @access Public
   */
  .post("/login", expressAsyncHandler(login));

export default authRouter;
