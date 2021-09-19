import { Router } from "express";
import authRouter from "./routes/authRoutes.js";
import productRouter from "./routes/productRoutes.js";

const routes = () => {
  const router = Router();
  router.use("/auth", authRouter);
  router.use("/products", productRouter);
  return router;
};
export default routes;
