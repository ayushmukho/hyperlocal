import Router from "express";
import {
  allProducts,
  allProductsByCategory,
  allProductsBySeller,
  createProduct,
  deleteProduct,
  oneProduct,
  updateProduct,
} from "../controllers/productControllers.js";
import expressAsyncHandler from "express-async-handler";
import { isSeller, verifyToken } from "../middlewares/authMiddleware.js";

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
   * @route /api/products/:productid
   * @access Public
   */
  .get("/one/:productid", expressAsyncHandler(oneProduct))
  /**
   * @desc fetch all products by category
   * @route /api/products/:categoryid
   * @access Public
   */
  .get("/:categoryid", expressAsyncHandler(allProductsByCategory))
  /**
   * @desc fetch all products by seller
   * @route /api/products/:sellerid
   * @access Public
   */
  .get("/:sellerid", expressAsyncHandler(allProductsBySeller))
  /**
   * @desc create a product
   * @route /api/products/
   * @access Seller
   */
  .post(
    "/",
    expressAsyncHandler(verifyToken),
    expressAsyncHandler(isSeller),
    expressAsyncHandler(createProduct)
  )
  /**
   * @desc update a product
   * @route api/products/:productid
   * @access Admin
   */
  .patch(
    "/:productid",
    expressAsyncHandler(verifyToken),
    expressAsyncHandler(isSeller),
    expressAsyncHandler(updateProduct)
  )
  /**
   * @desc delete a product
   * @router api/products/:productid
   * @access Admin
   */
  .delete(
    "/:productid",
    expressAsyncHandler(verifyToken),
    expressAsyncHandler(isSeller),
    expressAsyncHandler(deleteProduct)
  );
export default productRouter;
