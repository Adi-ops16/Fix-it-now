import { z } from "zod";
import { BookingStatus } from "../prisma/generated/prisma/enums";

const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;

export const createBookingSchema = z.object({

    service_id: z
        .number({
            error: "Service ID is required.",
        })
        .int({
            message: "Service ID must be an integer.",
        })
        .positive({
            message: "Service ID must be greater than 0.",
        }),

    work_date: z.coerce.date({
        error: "Work date is required and must be a valid date. please provide the date in YYYY-MM-DD format.",
    }).refine((val) => val >= new Date(),
        {
            error: "Date cannot be in the past"
        }),

    work_startTime: z.string().regex(timeRegex, {
        error: "Please provide an HH:mm format"
    })
});

export const updateBookingStatusSchema = z.object({
    booking_id: z.uuid({
        error: "booking_id must be a valid uuid"
    }),
    status: z.enum(BookingStatus, {
        error: "Status must be a valid enum"
    }).refine(
        status => status !== "PAID" && status !== "REQUESTED",
        {
            error: "Status cannot be 'Requested' or 'Paid' "
        }
    )
})

export type TCreateBookingPayload = z.infer<typeof createBookingSchema>;
export type TUpdateBookingStatusPayload = z.infer<typeof updateBookingStatusSchema>