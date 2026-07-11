import status from "http-status";
import { prisma } from "../lib/prisma";
import { AppError, removeUndefined } from "../utils";
import type { TCreateReviewPayload, TUpdateReviewPayload } from "../types";
import type { ReviewUpdateInput } from "../prisma/generated/prisma/models";

const createReview = async (customer_id: string, payload: TCreateReviewPayload) => {
    const booking = await prisma.booking.findFirst({
        where: {
            id: payload.booking_id,
            customer_id,
            booking_status: "COMPLETED"
        },
        select: {
            id: true,
            technician_id: true,
            customer_id: true
        }
    });

    if (!booking) {
        throw new AppError(status.NOT_FOUND, "Completed booking not found for this customer");
    }

    const existingReview = await prisma.review.findFirst({
        where: {
            booking_id: payload.booking_id
        }
    });

    if (existingReview) {
        throw new AppError(status.CONFLICT, "A review already exists for this booking");
    }

    const result = await prisma.review.create({
        data: {
            booking_id: payload.booking_id,
            technician_id: booking.technician_id,
            customer_id: booking.customer_id,
            rating: payload.rating,
            comment: payload.comment || null
        },
        include: {
            technician: {
                include: {
                    customer: {
                        omit: { password: true }
                    }
                }
            }
        }
    });

    return result;
};

const getReviewsByTechnicianId = async (technician_id: string) => {
    const result = await prisma.review.findMany({
        where: { technician_id },
        orderBy: { created_at: "desc" },
        include: {
            customer: {
                omit: { password: true }
            }
        }
    });

    return result;
};

const getReviewByBookingId = async (booking_id: string) => {
    const result = await prisma.review.findFirst({
        where: { booking_id },
        include: {
            customer: {
                omit: { password: true }
            },
            technician: {
                include: {
                    customer: {
                        omit: { password: true }
                    }
                }
            }
        }
    });

    return result;
};

const updateReview = async (customer_id: string, review_id: number, payload: TUpdateReviewPayload) => {
    const review = await prisma.review.findFirst({
        where: {
            id: review_id,
            customer_id
        }
    });

    if (!review) {
        throw new AppError(status.NOT_FOUND, "Review not found or unauthorized");
    }

    const data = removeUndefined(payload) as ReviewUpdateInput

    const result = await prisma.review.update({
        where: { id: review_id },
        data: data
    });

    return result;
};

const deleteReview = async (customer_id: string, review_id: number) => {
    const review = await prisma.review.findFirst({
        where: {
            id: review_id,
            customer_id
        }
    });

    if (!review) {
        throw new AppError(status.NOT_FOUND, "Review not found or unauthorized");
    }

    await prisma.review.delete({
        where: { id: review_id }
    });

    return true;
};

export const reviewService = {
    createReview,
    getReviewsByTechnicianId,
    getReviewByBookingId,
    updateReview,
    deleteReview
};
