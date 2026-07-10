import express, { type Application, type Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import config from './config';
import { authRoutes } from './auth/auth.route';
import { sendResponse } from './utils';
import globalErrorHandler from './middlewares/globalErrorHandler';
import { customerRoutes } from './customer/customer.route';
import { technicianRoutes } from './technician/technician.route';
import { categoryRoutes } from './category/category.route';
import { serviceRoutes } from './service/service.route';
import { notFound } from './middlewares/notFound';
import { availabilityRoutes } from './availability/availability.route';
import { bookingRoutes } from './booking/booking.route';
import { paymentRoutes } from './payment/payment.route';

const app: Application = express();

app.use(cors({
    origin: config.app_url,
    credentials: true
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res: Response) => {
    sendResponse(res, {
        success: true,
        code: 200,
        message: 'Welcome to the API',
    });
})

app.use('/api/auth', authRoutes);
app.use('/api/customers', customerRoutes)
app.use('/api/technician/availability', availabilityRoutes)
app.use('/api/technician', technicianRoutes)
app.use('/api/categories', categoryRoutes)
app.use('/api/services', serviceRoutes)
app.use('/api/bookings', bookingRoutes)
app.use('/api/payment', paymentRoutes)

app.use(globalErrorHandler);
app.use(notFound)

export default app;