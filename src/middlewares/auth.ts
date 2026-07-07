import type { NextFunction, Request, Response } from "express";
import type { Role, UserStatus } from "../prisma/generated/prisma/enums";
import { AppError, verifyToken } from "../utils";
import status from "http-status";
import { prisma } from "../lib/prisma";

declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string;
                email: string;
                role: Role;
                user_status: UserStatus;
            }
        }
    }
}

interface JwtPayload {
    user_id: string;
    email: string;
    role: Role;
    user_status: UserStatus;
}

const auth = (...roles: Role[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const accessToken: string = req.cookies?.accessToken

        if (!accessToken) {
            throw new AppError(status.NOT_FOUND, "Access token not found");
        }

        const isVerified = verifyToken(accessToken)
        if (!isVerified.success) {
            throw new AppError(status.UNAUTHORIZED, "Invalid access token");
        }

        const { email, role, user_status, user_id } = isVerified.data as JwtPayload
        if (!roles.includes(role)) {
            throw new AppError(status.FORBIDDEN, "You are not authorized to access this resource");
        }

        const user = await prisma.user.findUnique({
            where: {
                id: user_id,
                email
            }
        })

        if (!user) {
            throw new AppError(status.NOT_FOUND, "User not found");
        }

        if (user.user_status === "BAN") {
            throw new AppError(status.FORBIDDEN, "Your account has been banned. Please contact support for assistance.");
        }

        req.user = {
            id: user.id,
            email: user.email,
            role: user.role,
            user_status: user.user_status
        }

        next()

    }
}

export default auth;