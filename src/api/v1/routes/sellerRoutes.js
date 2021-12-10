import { Router } from "express";
import expressAsyncHandler from "express-async-handler";
import {
  applySeller,
  getAllSellers,
} from "../controllers/sellerControllers.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const sellerRouter = Router();

sellerRouter
  /**
   * @desc get all sellers
   * @route api/seller/
   * @access Public
   */
  .get("/", expressAsyncHandler(getAllSellers))
  /**
   * @desc apply to become a seller
   * @route api/seller/apply
   * @access Seller
   */
  .post(
    "/apply",
    expressAsyncHandler(verifyToken),
    expressAsyncHandler(applySeller)
  );

export default sellerRouter;
