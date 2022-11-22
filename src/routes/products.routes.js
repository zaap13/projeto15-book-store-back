import { Router } from "express";
import { getUserProducts, postProduct } from "../controllers/products.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { productMiddleware } from "../middlewares/newItem.middleware.js";

const router = Router();


router.post("/products", authMiddleware, productMiddleware, postProduct);

router.get("/products/:userId", getUserProducts);

export default router;