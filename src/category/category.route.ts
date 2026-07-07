import { Router } from "express";
import { categoryController } from "./category.controller";

const router = Router()

router.get('/', categoryController.getCategories)
router.post('/', categoryController.postCategory)
router.patch('/:id', categoryController.updateCategory)
router.delete('/:id', categoryController.deleteCategory)

export const categoryRoutes = router