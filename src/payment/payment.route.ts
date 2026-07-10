import { Router } from "express";
import { paymentController } from "./payment.controller";
import auth from "../middlewares/auth";

const router = Router()

router.get('/history', auth("CUSTOMER", "TECHNICIAN"), paymentController.getMyPayments)
router.post('/checkout', auth("CUSTOMER"), paymentController.createCheckout)
router.post('/webhook', paymentController.handleWebhook)

router.get('/payment_success', paymentController.paymentSuccess)
router.get('/payment_cancelled', paymentController.paymentCancel)

export const paymentRoutes = router