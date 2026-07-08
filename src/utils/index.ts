import type { NextFunction, RequestHandler, Response, Request } from "express";
import type { TResponseHandler } from "../types";
import bcrypt from 'bcrypt'
import config from "../config";
import jwt, { type JwtPayload } from 'jsonwebtoken'

export class AppError extends Error {
    statusCode: number;
    constructor(code: number, message: string) {
        super(message);
        this.statusCode = code;

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

// Password Hashing 

export const hashPassword = async (password: string) => {
    return await bcrypt.hash(password, Number(config.bcrypt_salt_rounds))
}

export const verifyPassword = async (password: string, hashedPassword: string) => {
    return await bcrypt.compare(password, hashedPassword)
}

// JWT token

export const signToken = (payload: JwtPayload) => {
    return jwt.sign(payload, config.jwt_access_secret)
}

export const verifyToken = (token: string) => {
    try {
        const payload = jwt.verify(token, config.jwt_access_secret)
        return {
            success: true,
            data: payload
        }
    } catch (error: any) {
        console.log("Token verification failed", error)
        return {
            success: false,
            error: error.message
        }
    }
}

// remove undefined from object

export const removeUndefined = <T extends Object>(payload: T) => {
    return Object.fromEntries(
        Object.entries(payload).filter(([, val]) => val !== undefined)
    )
}

// time to minute helper
export const timeToMinutes = (timeStr: string) => {
    const parts = timeStr.split(':').map(Number);
    const hours = parts[0]!
    const minutes = parts[1]!

    return (hours * 60 + minutes);
};