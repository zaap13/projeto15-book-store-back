import { Router } from "express";
import { getProducts, getProduct, postProduct } from "../controllers/products.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { productMiddleware } from "../middlewares/newItem.middleware.js";

const router = Router();


router.post("/products", authMiddleware, productMiddleware, postProduct);

router.get("/products", getProducts);
router.get("/products/:id", getProduct);

export default router;