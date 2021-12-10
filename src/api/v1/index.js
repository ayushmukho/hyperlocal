import { Router } from "express";
import userRouter from "./routes/userRoutes.js";
import categoryRouter from "./routes/categoryRoutes.js";
import productRouter from "./routes/productRoutes.js";
import authRouter from "./routes/authRoutes.js";
import adminRouter from "./routes/adminRoutes.js";
import sellerRouter from "./routes/sellerRoutes.js";

const routes = () => {
  const router = Router();
  router.use("/auth", authRouter);
  router.use("/user", userRouter);
  router.use("/admin", adminRouter);
  router.use("/seller", sellerRouter);
  router.use("/category", categoryRouter);
  router.use("/products", productRouter);
  return router;
};
export default routes;
