import status from "http-status"
import { prisma } from "../lib/prisma"
import type { TCreateBookingPayload, TUpdateBookingStatusPayload } from "../types"
import { AppError, combineDateTime, getEndTime } from "../utils"
import type { Role, Weekdays } from "../prisma/generated/prisma/enums"

const weekdays: Weekdays[] = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
];

interface IWhereConditions {
    customer_id?: string;
    technician_id?: string
}

const getAllBookings = async () => {
    const result = await prisma.booking.findMany({
        orderBy: { created_at: "desc" }
    })

    return result
}

const getMyBookings = async (userId: string, role: Role) => {
    const whereCondition: IWhereConditions = {}
    if (role === "CUSTOMER") {
        whereCondition.customer_id = userId
    } else {
        whereCondition.technician_id = userId
    }

    const result = await prisma.booking.findMany({
        where: whereCondition
    })

    return result
}

const createBooking = async (customer_id: string, payload: TCreateBookingPayload) => {
    const weekday = weekdays[payload.work_date.getDay()]!

    const service = await prisma.service.findFirst({
        where: { id: payload.service_id }
    })

    if (!service) {
        throw new AppError(status.NOT_FOUND, "Service Not found")
    }

    const start_time = combineDateTime(payload.work_date, payload.work_startTime);
    const end_time = getEndTime(start_time, service?.estimated_time)


    const availability = await prisma.technicianAvailability.findFirst({
        where: { technician_id: service?.technician_id, weekday }
    })
    if (!availability) {
        throw new AppError(status.CONFLICT, "Technician doesn't have schedule set")
    }

    if (!availability.start_time || !availability.end_time) {
        throw new AppError(status.CONFLICT, "Technician is not available in this date")
    }

    const bookingStart = start_time.toTimeString().slice(0, 5);
    const bookingEnd = end_time.toTimeString().slice(0, 5);


    if (bookingStart < availability.start_time || bookingEnd > availability.end_time!) {
        throw new AppError(
            status.BAD_REQUEST,
            "Booking is outside technician working hours."
        );
    }

    const conflict = await prisma.booking.findFirst({
        where: {
            technician_id: service.technician_id,
            work_date: payload.work_date,
            work_startTime: {
                lt: end_time,
            },
            work_endTime: {
                gt: start_time,
            },
            booking_status: {
                in: ["REQUESTED", "ACCEPTED", "COMPLETED", "IN_PROGRESS", "PAID"]
            }
        },
    });

    if (conflict) {
        throw new AppError(status.CONFLICT, "Technician already has another booking during this time")
    }

    const result = await prisma.booking.create({
        data: {
            ...payload,
            work_startTime: start_time,
            work_endTime: end_time,
            customer_id,
            technician_id: service.technician_id,
            estimated_time: service.estimated_time,
            total_amount: service.price,
        }
    })

    return result

}

const updateBookingStatus = async (userId: string, role: Role, payload: TUpdateBookingStatusPayload) => {
    const { booking_id, status } = payload

    const whereCondition: IWhereConditions = {}
    if (role === "CUSTOMER") {
        whereCondition.customer_id = userId
    } else {
        whereCondition.technician_id = userId
    }

    const booking = await prisma.booking.findFirst({
        where: { id: booking_id, ...whereCondition }
    })

    // validations

    if (!booking) {
        throw new AppError(404, "Booking not found or unauthorized access");
    }
    if (booking?.booking_status === "COMPLETED") {
        throw new AppError(409, "Cannot changed the status of a completed booking")
    }
    if (booking.booking_status === "CANCELLED") {
        throw new AppError(409, "Cannot modify an already cancelled booking");
    }
    if (role === "CUSTOMER" && status === "DECLINED") {
        throw new AppError(403, "Customers cannot decline bookings. Did you mean to cancel?");
    }
    if (role !== "CUSTOMER" && status === "CANCELLED") {
        throw new AppError(409, "Only customers can cancel a booking");
    }
    if (role === "CUSTOMER" && status === "CANCELLED") {
        if (booking.booking_status === "IN_PROGRESS") {
            throw new AppError(409, "Customer cannot cancel an in-progress booking");
        }
    }

    const result = await prisma.booking.update({
        where: { id: booking_id, ...whereCondition },
        data: {
            booking_status: status
        },
        select: {
            id: true,
            booking_status: true,
            cancellation_reason: true,
            customer_id: true,
            technician_id: true
        }
    })

    return result
}

export const bookingService = { getAllBookings, getMyBookings, createBooking, updateBookingStatus }