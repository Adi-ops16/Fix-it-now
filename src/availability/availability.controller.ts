import status from "http-status"
import { createAvailabilitySchema } from "../schemas/availability.schema"
import { catchAsync, sendResponse } from "../utils"
import { availabilityService } from "./availability.service"

const setAvailability = catchAsync(async (req, res, next) => {
    const validatedData = createAvailabilitySchema.parse(req.body)

    const technician_id = req.user?.id!

    const result = await availabilityService.setAvailability(technician_id, validatedData)

    sendResponse(res, {
        code: status.OK,
        message: "Available schedule updated successfully",
        data: result
    })
})

const getAvailability = catchAsync(async (req, res, next) => {
    const result = await availabilityService.getAvailability()

    sendResponse(res, {
        code: status.OK,
        message: "Schedule retrieved successful",
        data: result
    })
})


export const availabilityController = { getAvailability, setAvailability }