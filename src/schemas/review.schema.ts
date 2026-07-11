import { z } from "zod";

export const createReviewSchema = z.object({
    booking_id: z.uuid({
        error: "booking_id must be a valid UUID"
    }),
    rating: z.number({
        error: "Rating is required and must be a number"
    })
        .int({ message: "Rating must be an integer" })
        .min(1, { message: "Rating must be at least 1" })
        .max(5, { message: "Rating cannot be more than 5" }),
    comment: z.string({ error: "Comment must be a string" })
        .trim()
        .max(500, { message: "Comment cannot exceed 500 characters" })
        .optional()
});

export const updateReviewSchema = createReviewSchema.omit({ booking_id: true }).partial();

export type TCreateReviewPayload = z.infer<typeof createReviewSchema>;
export type TUpdateReviewPayload = z.infer<typeof updateReviewSchema>;
