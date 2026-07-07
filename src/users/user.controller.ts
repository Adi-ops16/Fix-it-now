import status from "http-status";
import { catchAsync, sendResponse } from "../utils";
import { userService } from "./user.service";

const createUser = catchAsync(async (req, res, next) => {
    const result = await userService.createUser(req.body)

    sendResponse(res, {
        code: status.CREATED,
        message: "User created successfully",
        data: result
    })
})

const getAllUsers = catchAsync(async (req, res, next) => {
    const result = await userService.getAllUsers()

    console.log(req.user)

    sendResponse(res, {
        code: status.OK,
        message: "Users fetched successfully",
        data: result
    })
})

const getUserById = catchAsync(async (req, res, next) => {
    const id = req.params.id as string
    const result = await userService.getUserById(id)

    sendResponse(res, {
        code: status.OK,
        message: "User fetched successfully",
        data: result
    })
})

const updateUserById = catchAsync(async (req, res, next) => {
    const id = req.params.id as string
    const payload = req.body
    const result = await userService.updateUserById(id, payload)

    sendResponse(res, {
        code: status.OK,
        message: "User update successfully",
        data: result
    })
})

const deleteUserById = catchAsync(async (req, res, next) => {
    const id = req.params.id as string
    await userService.deleteUserById(id)

    sendResponse(res, {
        code: status.OK,
        message: "User deleted successfully"
    })
})

export const userController = { getAllUsers, getUserById, updateUserById, createUser, deleteUserById }
