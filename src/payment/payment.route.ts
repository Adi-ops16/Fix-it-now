import { Router } from "express";
import { paymentController } from "./payment.controller";

const router = Router()

router.post('/checkout', paymentController.createCheckout)

export const paymentRoutes = router