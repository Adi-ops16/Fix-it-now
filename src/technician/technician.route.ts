import { Router } from "express"
import auth from "../middlewares/auth"
import { technicianController } from "./technician.controller"

const router = Router()

router.get("/", technicianController.getAllTechnicians)
router.get('/:id', technicianController.getTechnicianProfile)

router.post(
    '/register',
    auth("CUSTOMER"),
    technicianController.createTechnician
)

router.patch(
    '/profile',
    auth("TECHNICIAN"),
    technicianController.updateTechnicianProfile
)

export const technicianRoutes = router