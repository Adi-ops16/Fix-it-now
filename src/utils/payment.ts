import type Stripe from "stripe"
import { prisma } from "../lib/prisma"

export const handlePaymentSuccess = async (session: Stripe.Checkout.Session) => {
    if (!session.metadata?.booking_id || !session.metadata?.customer_id || !session.metadata?.technician_id) {
        console.error("CRITICAL: Payment succeeded but booking_id missing in metadata", {
            session_id: session.id,
            payment_intent: session.payment_intent,
            amount: session.amount_total,
            customer_email: session.customer_email
        })
    }

    const result = await prisma.$transaction(async (tx) => {

        const payment = await tx.payment.create({
            data: {
                booking_id: session.metadata!.booking_id!,
                customer_id: session.metadata!.customer_id!,
                technician_id: session.metadata!.technician_id!,
                stripe_session_id: session.id,
                payment_status: "SUCCESSFUL",
                amount: session.amount_subtotal! / 100,
                stripe_intent_id: session.payment_intent ? (session.payment_intent as string) : null,
                currency: session.currency as string,
            }
        })

        await tx.booking.update({
            where: { id: session.metadata!.booking_id! },
            data: {
                booking_status: "PAID"
            }
        })

        return payment
    })

    return result

}

export const handlePaymentExpire = async (session: Stripe.Checkout.Session) => {
    if (!session.metadata?.booking_id || !session.metadata?.customer_id || !session.metadata?.technician_id) {
        console.error("CRITICAL: Payment succeeded but booking_id missing in metadata", {
            session_id: session.id,
            payment_intent: session.payment_intent,
            amount: session.amount_total,
            customer_email: session.customer_email
        })
    }

    const payment = await prisma.payment.create({
        data: {
            booking_id: session.metadata!.booking_id!,
            customer_id: session.metadata!.customer_id!,
            technician_id: session.metadata!.technician_id!,
            stripe_session_id: session.id,
            amount: session.amount_subtotal ? session.amount_subtotal / 100 : 0,
            stripe_intent_id: session.payment_intent ? (session.payment_intent as string) : null,
            currency: session.currency as string,
            payment_status: "FAILED",
        }
    })

    return payment
}

