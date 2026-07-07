import { Router } from "express";
import { customerController } from "./customer.controller";
import app from "../app";
import auth from "../middlewares/auth";
import { Role } from "../prisma/generated/prisma/enums";

const router = Router()

router.get('/', auth(Role.ADMIN), customerController.getAllCustomers)
router.get('/:id', customerController.getCustomerById)
router.post('/', customerController.createCustomer)
router.patch('/:id', customerController.updateCustomerById)
router.delete('/:id', customerController.deleteCustomerById)

export const customerRoutes = router
