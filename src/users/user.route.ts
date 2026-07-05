import { Router } from "express";
import { userController } from "./user.controller";
import app from "../app";

const router = Router()

router.get('/', userController.getAllUsers)
router.get('/:id', userController.getUserById)
router.post('/', userController.createUser)
router.patch('/:id', userController.updateUserById)
router.delete('/:id', userController.deleteUserById)

export const userRoutes = router