import status from "http-status"
import { prisma } from "../lib/prisma"
import type { ICreateTechnicianPayload, IUpdateCustomerPayload, IUpdateTechnicianPayload } from "../types"
import { AppError, removeUndefined } from "../utils"

const getAllTechnicians = async () => {
    const result = await prisma.technicianProfile.findMany({
        include: {
            customer: {
                omit: {
                    password: true,
                    updated_at: true,
                    created_at: true,
                    id: true
                }
            }
        },
        omit: {
            created_at: true,
            updated_at: true
        }
    })

    return result
}

const getTechnicianProfile = async (id: string) => {
    if (!id) {
        throw new AppError(status.NOT_FOUND, "Please provide an id")
    }

    const result = await prisma.technicianProfile.findUnique({
        where: { user_id: id },
        include: { customer: { omit: { password: true } } }
    })

    return result
}

const createTechnician = async (user_id: string, payload: ICreateTechnicianPayload) => {
    const result = await prisma.$transaction(async (tx) => {

        await tx.customer.update({
            where: { id: user_id },
            data: { role: "TECHNICIAN" }
        })

        const technician = await tx.technicianProfile.create({
            data: {
                ...payload,
                customer: {
                    connect: {
                        id: user_id
                    },

                }
            },
            include: {
                customer: { omit: { password: true } }
            },
        })

        return technician
    })

    return result
}

const technicianProfileUpdate = async (user_id: string, payload: IUpdateTechnicianPayload) => {
    const data = removeUndefined(payload)

    const result = await prisma.technicianProfile.update({
        where: { user_id },
        data
    })

    return result
}

export const technicianService = { getAllTechnicians, createTechnician, technicianProfileUpdate, getTechnicianProfile }