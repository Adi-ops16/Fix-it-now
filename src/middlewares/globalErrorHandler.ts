import type { Request, Response, NextFunction } from "express";
import config from "../config";
import { ZodError } from "zod";

type ErrorResponse = {
    success: boolean
    message: string;
    error?: unknown;
}

const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    let statusCode: number = err.statusCode ?? 500;
    let message: string = err.message || 'Internal Server Error';

    const errorResponse: ErrorResponse = {
        success: false,
        message: message,
    }

    // Handle Zod validation errors
    if (err instanceof ZodError) {
        statusCode = 400;
        message = 'Validation Error';
        errorResponse.message = message;
        errorResponse.error = err.issues.map(issue => ({
            field: issue.path.join("."),
            message: issue.message,
        }))
    } else if (config.node_env === 'development') {
        errorResponse['error'] = err.stack;
    }

    res.status(statusCode).json(errorResponse);
}

export default globalErrorHandler;