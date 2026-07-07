import status from "http-status"
import { prisma } from "../lib/prisma"
import type { Prisma } from "../prisma/generated/prisma/client"
import type { TCreateCategoryPayload, TUpdateCategoryPayload } from "../types"
import { AppError, removeUndefined } from "../utils"

const postCategory = async (payload: TCreateCategoryPayload) => {
    const result = await prisma.categories.create({
        data: payload
    })

    return result
}

const getCategories = async () => {
    const result = await prisma.categories.findMany()

    return result
}

const updateCategory = async (id: number, payload: TUpdateCategoryPayload) => {
    if (!id) {
        throw new AppError(status.NOT_FOUND, "Category ID is required for update")
    }

    const data = removeUndefined(payload) as Prisma.CategoriesUpdateInput
    const result = await prisma.categories.update({
        where: { id },
        data
    })

    return result
}

const deleteCategory = async (id: number) => {
    if (!id) {
        throw new AppError(status.NOT_FOUND, "Category ID is required for delete")
    }
    await prisma.categories.delete({ where: { id } })

    return true
}


export const categoryServices = { getCategories, postCategory, updateCategory, deleteCategory }