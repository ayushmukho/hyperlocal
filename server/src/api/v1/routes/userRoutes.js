import { Router } from "express";
import expressAsyncHandler from "express-async-handler";
import {
  activateEmail,
  applySeller,
  approveSeller,
  getAccessToken,
  getAllApplication,
  getAllSellers,
  login,
  makeAdmin,
  register,
  rejectSeller,
} from "../controllers/userControllers.js";
import { isAdmin, verifyToken } from "../middlewares/authMiddleware.js";

const userRouter = Router();

userRouter
  /**
   * @desc register
   * @route api/user/register
   * @access Public
   */
  .post("/register", expressAsyncHandler(register))
  /**
   * @desc activate account
   * @route api/user/activation
   * @access Public
   */
  .post("/activation", expressAsyncHandler(activateEmail))
  /**
   * @desc login
   * @route api/user/login
   * @access Public
   */
  .post("/login", expressAsyncHandler(login))
  /**
   * @desc refreshtoken
   * @route api/user/refresh_token
   * @access Public
   */
  .post("/refresh_token", expressAsyncHandler(getAccessToken))
  /**
   * @desc get all sellers
   * @route api/user/seller/
   * @access Public
   */
  .get("/seller", expressAsyncHandler(getAllSellers))
  /**
   * @desc apply to become a seller
   * @route api/user/seller/apply
   * @access Private
   */
  .post(
    "/seller/apply",
    expressAsyncHandler(verifyToken),
    expressAsyncHandler(applySeller)
  )
  /**
   * @desc approve seller
   * @router api/user/seller/approve/:id
   * @access Admin
   */
  .post(
    "/seller/approve/:id",
    expressAsyncHandler(verifyToken),
    expressAsyncHandler(isAdmin),
    expressAsyncHandler(approveSeller)
  )
  /**
   * @desc get all applucation
   * @router api/user/seller/applications
   * @access Admin
   */
  .get(
    "/seller/applications",
    expressAsyncHandler(verifyToken),
    expressAsyncHandler(isAdmin),
    expressAsyncHandler(getAllApplication)
  )
  /**
   * @desc reject seller
   * @router api/user/seller/reject/:id
   * @access Admin
   */
  .post(
    "/seller/reject/:id",
    expressAsyncHandler(verifyToken),
    expressAsyncHandler(isAdmin),
    expressAsyncHandler(rejectSeller)
  )
  /**
   * @desc make admin
   * @router api/user/makeadmin/:id
   * @access Admin
   */
  .post(
    "/seller/makeadmin/:id",
    expressAsyncHandler(verifyToken),
    expressAsyncHandler(isAdmin),
    expressAsyncHandler(makeAdmin)
  );

export default userRouter;
