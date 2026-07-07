import { catchAsync } from "../utils";
import { categoryServices } from "./category.service";

const postCategory = catchAsync(async (req, res, next) => {
    const result = await categoryServices.postCategory()
})


// const postCategory = catchAsync(async (req, res, next) => {

// })
// const postCategory = catchAsync(async (req, res, next) => {

// })
// const postCategory = catchAsync(async (req, res, next) => {

// })

export const categoryController = { postCategory }