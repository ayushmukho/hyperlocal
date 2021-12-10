import { Router } from "express";
import expressAsyncHandler from "express-async-handler";
import {
  approveSeller,
  getAllApplication,
  makeAdmin,
  rejectSeller,
} from "../controllers/adminControllers.js";
import { isAdmin, verifyToken } from "../middlewares/authMiddleware.js";

const adminRouter = Router();

adminRouter
  /**
   * @desc get all applucation
   * @router api/admin/seller/applications
   * @access Admin
   */
  .get(
    "/seller/applications",
    expressAsyncHandler(verifyToken),
    expressAsyncHandler(isAdmin),
    expressAsyncHandler(getAllApplication)
  )
  /**
   * @desc approve seller
   * @router api/admin/seller/approve/:id
   * @access Admin
   */
  .get(
    "/seller/approve/:id",
    expressAsyncHandler(verifyToken),
    expressAsyncHandler(isAdmin),
    expressAsyncHandler(approveSeller)
  )
  /**
   * @desc reject seller
   * @router api/admin/seller/reject/:id
   * @access Admin
   */
  .get(
    "/seller/reject/:id",
    expressAsyncHandler(verifyToken),
    expressAsyncHandler(isAdmin),
    expressAsyncHandler(rejectSeller)
  )
  /**
   * @desc make admin
   * @router api/admin/makeadmin/:id
   * @access Admin
   */
  .get(
    "/makeadmin/:id",
    expressAsyncHandler(verifyToken),
    expressAsyncHandler(isAdmin),
    expressAsyncHandler(makeAdmin)
  );

export default adminRouter;
