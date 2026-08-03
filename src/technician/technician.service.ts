import status from "http-status"
import { prisma } from "../lib/prisma"
import type { IQuery, TCreateTechnicianPayload, TUpdateTechnicianPayload } from "../types"
import { AppError, removeUndefined, signToken } from "../utils"
import type { TechnicianProfileWhereInput } from "../prisma/generated/prisma/models"

const getAllTechnicians = async (query: IQuery) => {
    const limit = query.limit ? Number(query.limit) : 10
    const page = query.page ? Number(query.page) : 1
    const skip = (page - 1) * limit
    const sortBy = query.sortBy || "created_at"
    const sortOrder = query.sortOrder === "asc" ? "asc" : "desc"

    const andConditions: TechnicianProfileWhereInput[] = []

    if (query.location) {
        andConditions.push({
            location: {
                contains: query.location,
                mode: "insensitive"
            }
        })
    }

    const [technicians, total] = await Promise.all([
        prisma.technicianProfile.findMany({
            where: {
                AND: andConditions
            },
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
            },
            orderBy: {
                [sortBy]: sortOrder
            },
            take: limit,
            skip: skip
        }),
        prisma.technicianProfile.count({
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
        data: technicians
    }
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

const createTechnician = async (user_id: string, payload: TCreateTechnicianPayload) => {
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

    const jwtPayload = {
        user_id: result.user_id,
        email: result.customer.email,
        role: result.customer.role,
        user_status: result.customer.user_status,
        name: result.customer.name
    }

    const accessToken = signToken(jwtPayload)

    return { result, accessToken }
}

const technicianProfileUpdate = async (user_id: string, payload: TUpdateTechnicianPayload) => {
    const data = removeUndefined(payload)
    const { name, photo_url, ...profileData } = data
    const updateData: any = { ...profileData };

    if (name !== undefined || photo_url !== undefined) {
        updateData.customer = {
            update: {
                ...(name !== undefined && { name }),
                ...(photo_url !== undefined && { photo_url })
            }
        };
    }

    const user = await prisma.technicianProfile.update({
        where: { user_id },
        data: updateData,
        include: {
            customer: { omit: { password: true } }
        },
        omit: { created_at: true, updated_at: true }
    });

    const tokenPayload = {
        user_id: user.user_id,
        email: user.customer.email,
        role: user.customer.role,
        user_status: user.customer.user_status,
        name: user.customer.name
    }
    const accessToken = signToken(tokenPayload)

    return { user, accessToken }
}

export const technicianService = { getAllTechnicians, createTechnician, technicianProfileUpdate, getTechnicianProfile }