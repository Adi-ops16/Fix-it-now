import status from "http-status"
import { prisma } from "../lib/prisma"
import { AppError, removeUndefined } from "../utils"
import type { IQuery, TCreateServicePayload, TUpdateServicePayload } from "../types"
import type { ServiceWhereInput } from "../prisma/generated/prisma/models"

const getAllServices = async (query: IQuery) => {
    const limit = query.limit ? Number(query.limit) : 10
    const page = query.page ? Number(query.page) : 1
    const skip = (page - 1) * limit
    const sortBy = query.sortBy || "created_at"
    const sortOrder = query.sortOrder === "asc" ? "asc" : "desc"

    const andConditions: ServiceWhereInput[] = []

    if (query.searchTerms) {
        andConditions.push({
            OR: [
                {
                    title: {
                        contains: query.searchTerms,
                        mode: "insensitive"
                    }
                },
                {
                    description: {
                        contains: query.searchTerms,
                        mode: "insensitive"
                    }
                },
                {
                    category: {
                        name: {
                            contains: query.searchTerms,
                            mode: "insensitive"
                        }
                    }
                }
            ]
        })
    }

    if (query.category_id) {
        andConditions.push({ category_id: Number(query.category_id) })
    }

    if (query.technician_id) {
        andConditions.push({ technician_id: query.technician_id })
    }

    if (query.location) {
        andConditions.push({
            location: {
                contains: query.location,
                mode: 'insensitive'
            }
        })
    }

    const [services, total] = await Promise.all([
        prisma.service.findMany({
            where: {
                AND: andConditions
            },
            include: {
                category: true,
                technician: {
                    select: {
                        user_id: true,
                        experience_year: true,
                        is_available: true,
                        hourly_rate: true,
                        location: true
                    }
                }
            },
            orderBy: {
                [sortBy]: sortOrder
            },
            take: limit,
            skip: skip
        }),
        prisma.service.count({
            where: {
                AND: andConditions
            }
        })
    ])

    return {
        meta: {
            page,
            limit,
            totalDataCount: total,
            totalPages: Math.ceil(total / limit)
        },
        data: services
    }
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