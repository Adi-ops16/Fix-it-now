import status from "http-status"
import { prisma } from "../lib/prisma"
import type { ICreateCustomerPayload, IUpdateCustomerPayload } from "../types"
import { AppError, hashPassword } from "../utils"

const getAllCustomers = async () => {
    const result = await prisma.user.findMany({
        omit: { password: true }
    })

    return result
}

const createCustomer = async (payload: ICreateCustomerPayload) => {
    const isCustomerExist = await prisma.user.findUnique({
        where: { email: payload.email }
    })

    if (isCustomerExist) {
        throw new AppError(status.CONFLICT, "Account already exists, please login")
    }

    const hashedPassword = await hashPassword(payload.password)

    const result = await prisma.user.create({
        data: {
            ...payload,
            password: hashedPassword,
        },
        omit: { password: true },
    })

    return result
}

const getCustomerById = async (id: string) => {

    const result = await prisma.user.findUnique({
        where: { id },
        omit: { password: true }
    })

    if (!result) {
        throw new AppError(status.NOT_FOUND, "Customer doesn't exist")
    }

    return result
}

const updateCustomerById = async (id: string, payload: IUpdateCustomerPayload) => {
    const { name, photo_url } = payload

    const result = await prisma.user.update({
        where: { id },
        data: {
            ...(name !== undefined && { name }),
            ...(photo_url !== undefined && { photo_url })
        },
        omit: { password: true }
    })

    if (!result) {
        throw new AppError(status.NOT_FOUND, "Failed to update customer, check your id and try again")
    }

    return result
}

const deleteCustomerById = async (id: string) => {
    const customer = await prisma.user.findUnique({
        where: { id }
    })

    if (!customer) {
        throw new AppError(status.NOT_FOUND, "Customer not found, check your id and try again")
    }

    await prisma.user.delete({
        where: { id }
    })
    return true
}

export const customerService = { getAllCustomers, getCustomerById, createCustomer, updateCustomerById, deleteCustomerById }
