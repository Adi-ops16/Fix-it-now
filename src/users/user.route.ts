import { Router } from "express";
import { userController } from "./user.controller";
import app from "../app";
import auth from "../middlewares/auth";
import { Role } from "../prisma/generated/prisma/enums";

const router = Router()

router.get('/', auth(Role.ADMIN, Role.CUSTOMER), userController.getAllUsers)
router.get('/:id', userController.getUserById)
router.post('/', userController.createUser)
router.patch('/:id', userController.updateUserById)
router.delete('/:id', userController.deleteUserById)

export const userRoutes = router