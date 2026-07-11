import status from "http-status";
import { catchAsync, sendResponse } from "../utils";
import { reviewService } from "./review.service";
import { createReviewSchema, updateReviewSchema } from "../schemas/review.schema";

const createReview = catchAsync(async (req, res, next) => {
    const customer_id = req.user?.id as string;
    const validatedData = createReviewSchema.parse(req.body);
    const result = await reviewService.createReview(customer_id, validatedData);

    sendResponse(res, {
        code: status.CREATED,
        message: "Review created successfully",
        data: result
    });
});

const getReviewsByTechnicianId = catchAsync(async (req, res, next) => {
    const technician_id = req.params.technicianId as string;
    const result = await reviewService.getReviewsByTechnicianId(technician_id);

    sendResponse(res, {
        code: status.OK,
        message: "Reviews fetched successfully",
        data: result
    });
});

const getReviewByBookingId = catchAsync(async (req, res, next) => {
    const booking_id = req.params.bookingId as string;
    const result = await reviewService.getReviewByBookingId(booking_id);

    sendResponse(res, {
        code: status.OK,
        message: "Review fetched successfully",
        data: result
    });
});

const updateReview = catchAsync(async (req, res, next) => {
    const customer_id = req.user?.id as string;
    const review_id = Number(req.params.reviewId);
    const validatedData = updateReviewSchema.parse(req.body);
    const result = await reviewService.updateReview(customer_id, review_id, validatedData);

    sendResponse(res, {
        code: status.OK,
        message: "Review updated successfully",
        data: result
    });
});

const deleteReview = catchAsync(async (req, res, next) => {
    const customer_id = req.user?.id as string;
    const review_id = Number(req.params.reviewId);
    await reviewService.deleteReview(customer_id, review_id);

    sendResponse(res, {
        code: status.OK,
        message: "Review deleted successfully"
    });
});

export const reviewController = {
    createReview,
    getReviewsByTechnicianId,
    getReviewByBookingId,
    updateReview,
    deleteReview
};
