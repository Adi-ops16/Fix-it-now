import status from "http-status"
import { prisma } from "../lib/prisma"
import { AppError, removeUndefined } from "../utils"
import type { TCreateServicePayload, TUpdateServicePayload } from "../types"

const getAllServices = async () => {
    const result = await prisma.service.findMany()
    return result
}

const getServiceById = async (id: number) => {
    if (!id) {
        throw new AppError(status.NOT_FOUND, "Please provide the service id")
    }

    const result = await prisma.service.findUnique({
        where: { id },
        include: {
            category: {
                select: {
                    name: true,
                    description: true
                }
            },
            technician: {
                include: {
                    customer: {
                        omit: {
                            id: true,
                            password: true,
                            created_at: true,
                            updated_at: true
                        }
                    }
                },
                omit: {
                    user_id: true,
                    created_at: true,
                    updated_at: true
                }
            }
        }
    })

    if (!result) {
        return null
    }

    const { customer, ...technicianData } = result.technician;

    return {
        ...result,
        technician: {
            ...technicianData,
            ...customer
        }

    }
}

const createService = async (technician_id: string, payload: TCreateServicePayload) => {
    const result = await prisma.service.create({
        data: {
            ...payload,
            technician_id
        }
    })

    return result
}

const updateServiceById = async (id: number, payload: TUpdateServicePayload, technician_id: string) => {

    const data = removeUndefined(payload)

    const service = await prisma.service.findUnique({ where: { id } })

    if (!service) {
        throw new AppError(status.NOT_FOUND, "Service not found")
    }

    if (technician_id !== service.technician_id) {
        throw new AppError(status.FORBIDDEN, "You can't update service that is not yours")
    }

    const updated = await prisma.service.update({
        where: { id },
        data
    })

    return updated

}

const deleteServiceById = async (id: number, technician_id: string) => {
    const service = await prisma.service.findUnique({ where: { id } })

    if (!service) {
        throw new AppError(status.NOT_FOUND, "Service not found")
    }

    if (technician_id !== service.technician_id) {
        throw new AppError(status.FORBIDDEN, "You can't delete a service that is not yours")
    }

    await prisma.service.delete({
        where: { id }
    })

    return true
}

export const serviceService = { getAllServices, createService, getServiceById, updateServiceById, deleteServiceById }