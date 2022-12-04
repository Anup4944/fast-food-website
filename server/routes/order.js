import express from "express";
import { placeOrder } from "../controller/order.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/create", isAuthenticated, placeOrder);

export default router;
