import { Router } from "express";
import userRouter from "./routes/userRoutes.js";
import categoryRouter from "./routes/categoryRoutes.js";
import productRouter from "./routes/productRoutes.js";

const routes = () => {
  const router = Router();
  router.use("/user", userRouter);
  router.use("/category", categoryRouter);
  router.use("/products", productRouter);
  return router;
};
export default routes;
