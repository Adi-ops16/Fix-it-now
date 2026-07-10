import status from "http-status"
import config from "../config"
import { prisma } from "../lib/prisma"
import { stripe } from "../lib/stripe"
import { AppError } from "../utils"
import type Stripe from "stripe"
import { handlePaymentExpire, handlePaymentSuccess } from "../utils/payment"
import type { Role } from "../prisma/generated/prisma/enums"
import type { IQuery } from "../types"

interface IWhereConditions {
    customer_id?: string;
    technician_id?: string
}

const createCheckout = async (userId: string, booking_id: string) => {
    const booking = await prisma.booking.findFirst({
        where: { id: booking_id, customer_id: userId },
        include: {
            service: true,
            customer: true
        }
    })

    if (!booking) {
        throw new AppError(status.NOT_FOUND, "Booking Not Found")
    }

    const isBookingTimePassed = booking.work_startTime < new Date()
    if (isBookingTimePassed) {
        throw new AppError(status.BAD_REQUEST, "Booking time has passed")
    }

    if (!(booking.booking_status === "ACCEPTED")) {
        throw new AppError(status.BAD_REQUEST, "Booking is not accepted")
    }

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: booking?.service.title,
                        description: `Booking for ${booking.customer.name}-${booking.work_date.toDateString()}`
                    },
                    unit_amount: Math.round(booking.total_amount * 100)
                },
                quantity: 1,
            },
        ],
        customer_email: booking.customer.email,
        mode: "payment",
        success_url: `${config.app_url}/api/payment/payment_success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${config.app_url}/api/payment/payment_cancelled`,
        metadata: {
            booking_id: booking.id,
            customer_id: booking.customer_id,
            technician_id: booking.technician_id,
            service_id: booking.service_id
        }
    })
    return session.url
}

const handleWebhook = async (payload: Buffer, signature: string) => {
    const endpointSecret = config.stripe_webhook_secret
    const event = stripe.webhooks.constructEvent(
        payload,
        signature,
        endpointSecret
    )

    switch (event.type) {
        case 'checkout.session.completed':
            const session = event.data.object as Stripe.Checkout.Session;
            await handlePaymentSuccess(session)
            break

        case 'checkout.session.expired': {
            const session = event.data.object as Stripe.Checkout.Session
            await handlePaymentExpire(session)
            break
        }
        default:
            // Unexpected event type
            console.log(`Unhandled event type ${event.type}.`)
            break
    }
}

const getMyPayments = async (user_id: string, role: Role, query: IQuery) => {
    const whereCondition: IWhereConditions = {}
    const sortOrder = query.sortOrder ? query.sortOrder : "desc"

    if (role === "TECHNICIAN") {
        whereCondition.technician_id = user_id
    } else {
        whereCondition.customer_id = user_id
    }

    const result = await prisma.payment.findMany({
        where: whereCondition,
        orderBy: { created_at: sortOrder }
    })

    return result
}

export const paymentService = { getMyPayments, createCheckout, handleWebhook }