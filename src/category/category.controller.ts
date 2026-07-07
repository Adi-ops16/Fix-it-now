import status from "http-status";
import { createCategorySchema, updateCategorySchema } from "../schemas/category.schema";
import { catchAsync, sendResponse } from "../utils";
import { categoryServices } from "./category.service";

const postCategory = catchAsync(async (req, res, next) => {
    const validatedData = createCategorySchema.parse(req.body);
    const result = await categoryServices.postCategory(validatedData)

    sendResponse(res, {
        code: status.CREATED,
        message: "Category created successfully",
        data: result
    })
})

const getCategories = catchAsync(async (req, res, next) => {
    const result = await categoryServices.getCategories()

    sendResponse(res, {
        code: status.OK,
        message: "Categories retrieved successfully",
        data: result
    })
})

const updateCategory = catchAsync(async (req, res, next) => {
    const id = Number(req.params.id)
    const validatedData = updateCategorySchema.parse(req.body);
    const data = await categoryServices.updateCategory(id, validatedData)

    sendResponse(res, {
        code: status.OK,
        message: "Category updated successfully",
        data
    })
})

const deleteCategory = catchAsync(async (req, res, next) => {
    const id = Number(req.params.id)
    await categoryServices.deleteCategory(id)

    sendResponse(res, {
        code: status.OK,
        message: "Category updated successfully"
    })
})



export const categoryController = { getCategories, postCategory, updateCategory, deleteCategory }