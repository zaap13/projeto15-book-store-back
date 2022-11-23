import { authMiddleware } from "../middlewares/auth.middleware.js";
import { Router } from "express";
import { userMiddleware } from "../middlewares/user.middleware.js";
import { getUser } from "../controllers/user.controller.js";

const router = Router();

router.get("/user", authMiddleware, userMiddleware, getUser);

export default router;
