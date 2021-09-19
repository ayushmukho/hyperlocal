import Router from "express";
import { allProducts, oneProduct } from "../controllers/productControllers.js";
import expressAsyncHandler from "express-async-handler";
import { verifyToken } from "../middlewares/authMiddleware.js";

const productRouter = Router();

productRouter
  /**
   * @desc fetch all products
   * @route /api/products
   * @access Public
   */
  .get("/", expressAsyncHandler(allProducts))
  /**
   * @desc fetch one product
   * @route /api/products/:id
   * @access Public
   */
  .get("/:id", expressAsyncHandler(oneProduct));
export default productRouter;
