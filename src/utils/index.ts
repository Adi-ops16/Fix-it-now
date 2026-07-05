import type { NextFunction, RequestHandler, Response, Request } from "express";
import type { TResponseHandler } from "../types";
import bcrypt from 'bcrypt'
import config from "../config";

export class AppError extends Error {
    code: number;
    constructor(code: number, message: string) {
        super(message);
        this.code = code;

        Object.setPrototypeOf(this, AppError.prototype);
        Error.captureStackTrace(this, this.constructor);
    }

}

export const sendResponse = <T>(res: Response, data: TResponseHandler<T>) => {
    res.status(data.code).json({
        success: data.success || true,
        message: data.message,
        data: data.data || null
    });
}

export const catchAsync = (fn: RequestHandler) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await fn(req, res, next)
        } catch (error) {
            next(error)
        }
    }
}

export const hashPassword = async (password: string) => {
    return await bcrypt.hash(password, Number(config.bcrypt_salt_rounds))
}