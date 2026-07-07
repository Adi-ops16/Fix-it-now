import status from "http-status";
import { catchAsync, sendResponse } from "../utils";
import { technicianService } from "./technician.service";
import { createTechnicianSchema, updateTechnicianSchema } from "../schemas/technician.schema";

const getAllTechnicians = catchAsync(async (req, res, next) => {
    const data = await technicianService.getAllTechnicians()

    sendResponse(res, {
        code: status.OK,
        message: "Technicians data retrieved successfully",
        data
    })
})

const getTechnicianProfile = catchAsync(async (req, res, next) => {
    const id = req.params.id as string
    const result = await technicianService.getTechnicianProfile(id)

    sendResponse(res, {
        code: status.OK,
        message: "Technician Profile retrieved successfully",
        data: result
    })
})

const createTechnician = catchAsync(async (req, res, next) => {
    const user_id = req.user?.id!
    const validatedData = createTechnicianSchema.parse(req.body);
    const result = await technicianService.createTechnician(user_id, validatedData)

    sendResponse(res, {
        code: status.CREATED,
        message: "Technician profile created successfully",
        data: result
    })
})

const updateTechnicianProfile = catchAsync(async (req, res, next) => {
    const id = req.user?.id!
    const validatedData = updateTechnicianSchema.parse(req.body)
    const result = await technicianService.technicianProfileUpdate(id, validatedData)

    sendResponse(res, {
        code: status.OK,
        message: "Profile updated Successfully",
        data: result
    })
})

export const technicianController = { getAllTechnicians, getTechnicianProfile, createTechnician, updateTechnicianProfile }