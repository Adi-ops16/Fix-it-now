import status from "http-status"
import { createBookingSchema, updateBookingStatusSchema } from "../schemas/booking.schema"
import { catchAsync, sendResponse } from "../utils"
import { bookingService } from "./booking.service"

const getAllBookings = catchAsync(async (req, res, next) => {
    const data = await bookingService.getAllBookings()

    sendResponse(res, {
        code: status.OK,
        message: "Bookings retrieved successfully",
        data
    })
})

const getMyBookings = catchAsync(async (req, res, next) => {
    const userId = req.user?.id!
    const role = req.user?.role!
    const data = await bookingService.getMyBookings(userId, role)

    sendResponse(res, {
        code: status.OK,
        message: "Bookings retrieved successfully",
        data
    })

})

const createBooking = catchAsync(async (req, res, next) => {
    const customer_id = req.user?.id as string
    const validatedData = createBookingSchema.parse(req.body)
    const result = await bookingService.createBooking(customer_id, validatedData)

    sendResponse(res, {
        code: status.CREATED,
        message: "Booking created successfully",
        data: result
    })
})

const updateBookingStatus = catchAsync(async (req, res, next) => {
    const userId = req.user?.id!
    const role = req.user?.role!
    const validatedData = updateBookingStatusSchema.parse(req.body)
    const data = await bookingService.updateBookingStatus(userId, role, validatedData)

    sendResponse(res, {
        code: status.OK,
        message: "Bookings status updated successfully",
        data
    })
})

export const bookingController = { getAllBookings, getMyBookings, createBooking, updateBookingStatus }