import { Router } from "express";
import authRouter from "./routes/authRoutes.js";
import categoryRouter from "./routes/categoryRoutes.js";
import productRouter from "./routes/productRoutes.js";

const routes = () => {
  const router = Router();
  router.use("/auth", authRouter);
  router.use("/category", categoryRouter);
  router.use("/products", productRouter);
  return router;
};
export default routes;
