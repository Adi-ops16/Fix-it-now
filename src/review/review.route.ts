import { Router } from "express";
import auth from "../middlewares/auth";
import { reviewController } from "./review.controller";

const router = Router();

router.post("/", auth("CUSTOMER"), reviewController.createReview);
router.get("/technician/:technicianId", reviewController.getReviewsByTechnicianId);
router.get("/booking/:bookingId", reviewController.getReviewByBookingId);
router.patch("/:reviewId", auth("CUSTOMER"), reviewController.updateReview);
router.delete("/:reviewId", auth("CUSTOMER"), reviewController.deleteReview);

export const reviewRoutes = router;
