import { Router } from "express";
import { getSales, postSale } from "../controllers/sales.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { checkoutMiddleware } from "../middlewares/checkout.middleware.js";

const router = Router();

router.use(authMiddleware);

router.post("/sales", checkoutMiddleware, postSale);

router.get("/sales", getSales);

export default router;