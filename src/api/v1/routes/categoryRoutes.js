import { Router } from "express";
import expressAsyncHandler from "express-async-handler";
import {
  createCategory,
  deleteCategory,
  getAllCategories,
  updateCategory,
} from "../controllers/categoryControllers.js";
import { isAdmin, verifyToken } from "../middlewares/authMiddleware.js";

const categoryRouter = Router();

categoryRouter
  /**
   * @desc get all category
   * @route api/category/
   * @access Public
   */
  .get("/", expressAsyncHandler(getAllCategories))
  /**
   * @desc create new category
   * @router api/category/
   * @access Admin
   */
  .post(
    "/",
    expressAsyncHandler(verifyToken),
    expressAsyncHandler(isAdmin),
    expressAsyncHandler(createCategory)
  )
  /**
   * @desc update a category
   * @route api/category/:id
   * @access Admin
   */
  .patch(
    "/:id",
    expressAsyncHandler(verifyToken),
    expressAsyncHandler(isAdmin),
    expressAsyncHandler(updateCategory)
  )
  /**
   * @desc delete a category
   * @router api/category/:id
   * @access Admin
   */
  .delete(
    "/:id",
    expressAsyncHandler(verifyToken),
    expressAsyncHandler(isAdmin),
    expressAsyncHandler(deleteCategory)
  );

export default categoryRouter;
