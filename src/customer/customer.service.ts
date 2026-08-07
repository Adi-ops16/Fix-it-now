import status from "http-status"
import { prisma } from "../lib/prisma"
import type { IQuery, TCreateCustomerPayload, TUpdateCustomerPayload } from "../types"
import { AppError, hashPassword } from "../utils"
import type { CustomerWhereInput } from "../prisma/generated/prisma/models"
import type { UserStatus } from "../prisma/generated/prisma/enums"

const getAllCustomers = async (query: IQuery) => {

    const limit = query.limit ? Number(query.limit) : 10
    const page = query.page ? Number(query.page) : 1
    const skip = (page - 1) * limit
    const sortOrder = query.sortOrder ? query.sortOrder : "desc"

    const whereCondition: CustomerWhereInput = {}
    if (query.user_status) {
        whereCondition.user_status = query.user_status
    }

    if (query.role) {
        whereCondition.role = query.role;
    }

    const result = await prisma.customer.findMany({
        where: whereCondition,
        omit: { password: true },
        orderBy: { created_at: sortOrder },
        take: limit,
        skip: skip
    })

    const total = await prisma.customer.count({ where: whereCondition })

    return {
        data: result,
        meta: {
            page,
            limit,
            totalDataCount: total,
            totalPages: Math.ceil(total / limit)
        }
    }
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

const manageCustomers = async (userId: string, status: UserStatus) => {
    const result = await prisma.customer.update({
        where: { id: userId },
        data: {
            user_status: status
        },
        omit: { password: true }
    })

    return result
}

const getAppOverview = async () => {
    const [
        totalUsers,
        workingTechnicians,
        totalTechnicians,
        totalBookings,
        pendingBookings,
        revenueResult,
        averageRatingResult
    ] = await Promise.all([
        prisma.customer.count(),
        prisma.technicianProfile.count({ where: { is_available: true } }),
        prisma.technicianProfile.count(),
        prisma.booking.count(),
        prisma.booking.count({
            where: {
                booking_status: {
                    notIn: ["CANCELLED", "DECLINED"]
                }
            }
        }),
        prisma.payment.aggregate({ _sum: { amount: true } }),
        prisma.review.aggregate({ _avg: { rating: true } }),
    ])

    // 2. Perform calculations with safety checks against division-by-zero
    const nonWorkingTechnicians = totalTechnicians - workingTechnicians
    const workRate = Number(((workingTechnicians / totalTechnicians) * 100).toFixed(2))
    const cancelledBooking = totalBookings - pendingBookings
    const cancellationRate = totalBookings > 0
        ? Number(((cancelledBooking / totalBookings) * 100).toFixed(2))
        : 0

    // 3. Extract aggregated values cleanly
    const totalRevenue = revenueResult._sum.amount ?? 0
    const averageRating = averageRatingResult._avg.rating
        ? Number(averageRatingResult._avg.rating.toFixed(2))
        : 0


    return {
        totalUsers,
        workingTechnicians,
        totalTechnicians,
        nonWorkingTechnicians,
        workRate,
        totalBookings,
        pendingBookings,
        cancelledBooking,
        cancellationRate,
        totalRevenue,
        averageRating
    }
}

export const customerService = { getAllCustomers, getCustomerById, createCustomer, updateCustomerById, deleteCustomerById, manageCustomers, getAppOverview }
