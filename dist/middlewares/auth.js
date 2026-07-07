import { AppError, verifyToken } from "../utils";
import status from "http-status";
import { prisma } from "../lib/prisma";
const auth = (...roles) => {
    return async (req, res, next) => {
        const accessToken = req.cookies?.accessToken;
        if (!accessToken) {
            throw new AppError(status.NOT_FOUND, "Access token not found");
        }
        const isVerified = verifyToken(accessToken);
        if (!isVerified.success) {
            throw new AppError(status.UNAUTHORIZED, "Invalid access token");
        }
        const { email, role, user_status, user_id } = isVerified.data;
        if (!roles.includes(role)) {
            throw new AppError(status.FORBIDDEN, "You are not authorized to access this resource");
        }
        const user = await prisma.user.findUnique({
            where: {
                id: user_id,
                email
            }
        });
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
        };
        next();
    };
};
export default auth;
//# sourceMappingURL=auth.js.map