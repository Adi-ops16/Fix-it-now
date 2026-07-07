import status from "http-status";
import { catchAsync, sendResponse } from "../utils";
import { customerService } from "./customer.service";
import { createCustomerSchema, updateCustomerSchema } from "../schemas/customer.schema";

const createCustomer = catchAsync(async (req, res, next) => {
    const validatedData = createCustomerSchema.parse(req.body);
    const result = await customerService.createCustomer(validatedData)

    sendResponse(res, {
        code: status.CREATED,
        message: "Customer created successfully",
        data: result
    })
})

const getAllCustomers = catchAsync(async (req, res, next) => {
    const result = await customerService.getAllCustomers()

    sendResponse(res, {
        code: status.OK,
        message: "Customers fetched successfully",
        data: result
    })
})

const getCustomerById = catchAsync(async (req, res, next) => {
    const id = req.params.id as string
    const result = await customerService.getCustomerById(id)

    sendResponse(res, {
        code: status.OK,
        message: "Customer fetched successfully",
        data: result
    })
})

const updateCustomerById = catchAsync(async (req, res, next) => {
    const id = req.params.id as string
    const validatedData = updateCustomerSchema.parse(req.body);
    const result = await customerService.updateCustomerById(id, validatedData)

    sendResponse(res, {
        code: status.OK,
        message: "Customer update successfully",
        data: result
    })
})

const deleteCustomerById = catchAsync(async (req, res, next) => {
    const id = req.params.id as string
    await customerService.deleteCustomerById(id)

    sendResponse(res, {
        code: status.OK,
        message: "Customer deleted successfully"
    })
})

export const customerController = { getAllCustomers, getCustomerById, updateCustomerById, createCustomer, deleteCustomerById }
