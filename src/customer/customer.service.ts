import status from "http-status"
import { prisma } from "../lib/prisma"
import type { TCreateCustomerPayload, TUpdateCustomerPayload } from "../types"
import { AppError, hashPassword } from "../utils"

const getAllCustomers = async () => {
    const result = await prisma.customer.findMany({
        omit: { password: true }
    })

    return result
}

const createCustomer = async (payload: TCreateCustomerPayload) => {
    const isCustomerExist = await prisma.customer.findUnique({
        where: { email: payload.email }
    })

    if (isCustomerExist) {
        throw new AppError(status.CONFLICT, "Account already exists, please login")
    }

    const hashedPassword = await hashPassword(payload.password)

    const result = await prisma.customer.create({
        data: {
            ...payload,
            password: hashedPassword,
        },
        omit: { password: true },
    })

    return result
}

const getCustomerById = async (id: string) => {

    const result = await prisma.customer.findUnique({
        where: { id },
        omit: { password: true },
        include: {
            technician_profile: true
        }
    })

    if (!result) {
        throw new AppError(status.NOT_FOUND, "Customer doesn't exist")
    }

    return result
}

const updateCustomerById = async (id: string, payload: TUpdateCustomerPayload) => {
    const { name, photo_url } = payload

    const result = await prisma.customer.update({
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
    const customer = await prisma.customer.findUnique({
        where: { id }
    })

    if (!customer) {
        throw new AppError(status.NOT_FOUND, "Customer not found, check your id and try again")
    }

    await prisma.customer.delete({
        where: { id }
    })
    return true
}

export const customerService = { getAllCustomers, getCustomerById, createCustomer, updateCustomerById, deleteCustomerById }
