import status from "http-status";
import { catchAsync, sendResponse } from "../utils";
import { paymentService } from "./payment.service";

const createCheckout = catchAsync(async (req, res, next) => {
    const booking_id = req.body.booking_id as string
    const userId = req.user?.id!
    const result = await paymentService.createCheckout(userId, booking_id)

    sendResponse(res, {
        code: status.OK,
        message: "session created, please redirect to the given url",
        data: {
            url: result
        }
    })
})

const handleWebhook = catchAsync(async (req, res, next) => {
    const event = req.body as Buffer;
    const signature = req.headers['stripe-signature']!;

    await paymentService.handleWebhook(event, signature as string)

    sendResponse(res, {
        code: status.OK,
        message: "Webhook called successful"
    })
})

const getMyPayments = catchAsync(async (req, res, next) => {
    const user_id = req.user?.id!
    const role = req.user?.role!
    const result = await paymentService.getMyPayments(user_id, role, req.query)

    sendResponse(res, {
        code: status.OK,
        message: "Payment history retrieved",
        data: result
    })
})

const paymentSuccess = catchAsync(async (req, res, next) => {
    res.status(200).json({
        success: true,
        message: "You payment has been successful, please wait for your technician. Thank you for trusting us",
        time: new Date().toTimeString()
    })
})

const paymentCancel = catchAsync(async (req, res, next) => {
    res.status(500).json({
        success: true,
        message: "For some reason your payment didn't go through, please try again.",
        time: new Date().toTimeString()
    })
})

export const paymentController = { getMyPayments, paymentSuccess, paymentCancel, createCheckout, handleWebhook }