import { Router } from "express";
import { serviceController } from "./service.controller";
import auth from "../middlewares/auth";

const router = Router();
router.get('/my-services', auth("TECHNICIAN"), serviceController.getMyServices)
router.get('/', serviceController.getAllServices)
router.get('/:serviceId', serviceController.getServiceById)
router.post('/', auth("TECHNICIAN"), serviceController.createService)
router.patch('/:serviceId', auth("TECHNICIAN"), serviceController.updateServiceById)
router.delete('/:serviceId', auth("TECHNICIAN"), serviceController.deleteServiceById)

export const serviceRoutes = router;