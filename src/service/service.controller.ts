import status from "http-status";
import { createServiceSchema, updateServiceSchema } from "../schemas/service.schema";
import { catchAsync, sendResponse } from "../utils"
import { serviceService } from "./service.service";

const getAllServices = catchAsync(async (req, res, next) => {
    const { data, meta } = await serviceService.getAllServices(req.query)

    sendResponse(res, {
        code: status.OK,
        message: "Services retrieved successfully",
        data,
        meta
    })

})

const getServiceById = catchAsync(async (req, res, next) => {
    const id = Number(req.params.serviceId)
    const data = await serviceService.getServiceById(id)

    sendResponse(res, {
        code: status.OK,
        message: "Service details retrieved successfully",
        data
    })
})

const createService = catchAsync(async (req, res, next) => {
    const technician_id = req.user?.id as string
    const validatedData = createServiceSchema.parse(req.body);

    const result = await serviceService.createService(technician_id, validatedData)

    sendResponse(res, {
        code: status.CREATED,
        message: "Service created successfully",
        data: result
    })
})

const updateServiceById = catchAsync(async (req, res, next) => {
    const id = Number(req.params.serviceId)
    const technician_id = req.user?.id as string
    const validatedData = updateServiceSchema.parse(req.body)

    const data = await serviceService.updateServiceById(id, validatedData, technician_id)

    sendResponse(res, {
        code: status.OK,
        message: "Service updated successfully",
        data
    })
})

const deleteServiceById = catchAsync(async (req, res, next) => {
    const id = Number(req.params.serviceId)
    const technician_id = req.user?.id as string

    await serviceService.deleteServiceById(id, technician_id)

    sendResponse(res, {
        code: status.OK,
        message: "Service deleted successfully",
    })
})

export const serviceController = { getAllServices, getServiceById, createService, updateServiceById, deleteServiceById }