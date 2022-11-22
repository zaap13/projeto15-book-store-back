import { Router } from "express";
import { getProducts } from "../controllers/products.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/products", authMiddleware, getProducts);

export default router;