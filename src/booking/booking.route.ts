import { Router } from "express";
import { bookingController } from "./booking.controller";
import auth from "../middlewares/auth";

const router = Router()

router.get('/', auth("CUSTOMER", "TECHNICIAN"), bookingController.getMyBookings)
router.get('/all', auth("ADMIN"), bookingController.getAllBookings)
router.post('/', auth("CUSTOMER"), bookingController.createBooking)
router.patch(
    '/status',
    auth("ADMIN", "CUSTOMER", "TECHNICIAN"),
    bookingController.updateBookingStatus
)

export const bookingRoutes = router