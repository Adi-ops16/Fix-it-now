import express, {} from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import config from './config';
import { authRoutes } from './auth/auth.route';
import { sendResponse } from './utils';
import globalErrorHandler from './middlewares/globalErrorHandler';
import { customerRoutes } from './customer/customer.route';
const app = express();
app.use(cors({
    origin: config.app_url,
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.get('/', (req, res) => {
    sendResponse(res, {
        success: true,
        code: 200,
        message: 'Welcome to the API',
    });
});
app.use('/api/auth', authRoutes);
app.use('/api/customers', customerRoutes);
app.use(globalErrorHandler);
export default app;
//# sourceMappingURL=app.js.map