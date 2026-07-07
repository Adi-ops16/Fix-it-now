import type { NextFunction, RequestHandler, Response, Request } from "express";
import type { TResponseHandler } from "../types";
import jwt, { type JwtPayload } from 'jsonwebtoken';
export declare class AppError extends Error {
    code: number;
    constructor(code: number, message: string);
}
export declare const sendResponse: <T>(res: Response, data: TResponseHandler<T>) => void;
export declare const catchAsync: (fn: RequestHandler) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const hashPassword: (password: string) => Promise<string>;
export declare const verifyPassword: (password: string, hashedPassword: string) => Promise<boolean>;
export declare const signToken: (payload: JwtPayload) => string;
export declare const verifyToken: (token: string) => {
    success: boolean;
    data: string | jwt.JwtPayload;
    error?: never;
} | {
    success: boolean;
    error: any;
    data?: never;
};
//# sourceMappingURL=index.d.ts.map