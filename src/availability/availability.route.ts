import { Router } from "express";
import { availabilityController } from "./availability.controller";
import auth from "../middlewares/auth";

const router = Router()

router.get('/', availabilityController.getAvailability)
router.put('/', auth("TECHNICIAN"), availabilityController.setAvailability)

export const availabilityRoutes = router