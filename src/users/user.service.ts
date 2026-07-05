import status from "http-status"
import { prisma } from "../lib/prisma"
import type { ICreateUserPayload, IUpdateUserPayload } from "../types"
import { AppError } from "../utils"
import bcrypt from 'bcrypt'
import config from "../config"
import { Role } from "../prisma/generated/prisma/enums"

const getAllUsers = async () => {
    const result = await prisma.user.findMany({
        omit: { password: true }
    })

    return result
}

const createUser = async (payload: ICreateUserPayload) => {
    const isUserExist = await prisma.user.findUnique({
        where: { email: payload.email }
    })

    if (isUserExist) {
        throw new AppError(status.CONFLICT, "Account already exists, please try again")
    }

    const hashedPassword = await bcrypt.hash(payload.password, Number(config.bcrypt_salt_rounds))

    const result = await prisma.user.create({
        data: {
            ...payload,
            password: hashedPassword,
        },
        omit: { password: true }
    })

    return result
}

const getUserById = async (id: string) => {

    const result = await prisma.user.findUnique({
        where: { id },
        omit: { password: true }
    })

    if (!result) {
        throw new AppError(status.NOT_FOUND, "User doesn't exist")
    }

    return result
}

const updateUserById = async (id: string, payload: IUpdateUserPayload) => {
    const { name, photo_url, role } = payload

    if (!Object.values(Role).includes(role as Role)) {
        throw new AppError(status.CONFLICT, "Invalid role, role must be 'ADMIN' or 'USER'");
    }

    const result = await prisma.user.update({
        where: { id },
        data: {
            ...(name !== undefined && { name }),
            ...(photo_url !== undefined && { photo_url }),
            ...(role !== undefined && { role }),
        },
        omit: { password: true }
    })
    if (!result) {
        throw new AppError(status.NOT_FOUND, "Failed to update user, check your id and try again")
    }

    return result
}

const deleteUserById = async (id: string) => {
    const user = await prisma.user.findUnique({
        where: { id }
    })

    if (!user) {
        throw new AppError(status.NOT_FOUND, "User not found, check your id and try again")
    }

    await prisma.user.delete({
        where: { id }
    })
    return true
}


export const userService = { getAllUsers, getUserById, createUser, updateUserById, deleteUserById }