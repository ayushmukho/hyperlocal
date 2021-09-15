import { Router } from "express";
import productRouter from "./routes/productRoutes.js";

const routes = () => {
  const router = Router();
  router.use("/products", productRouter);
  return router;
};
export default routes;
