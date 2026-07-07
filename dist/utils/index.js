import bcrypt from 'bcrypt';
import config from "../config";
import jwt, {} from 'jsonwebtoken';
export class AppError extends Error {
    code;
    constructor(code, message) {
        super(message);
        this.code = code;
        Object.setPrototypeOf(this, AppError.prototype);
        Error.captureStackTrace(this, this.constructor);
    }
}
export const sendResponse = (res, data) => {
    res.status(data.code).json({
        success: data.success || true,
        message: data.message,
        data: data.data || null
    });
};
export const catchAsync = (fn) => {
    return async (req, res, next) => {
        try {
            await fn(req, res, next);
        }
        catch (error) {
            next(error);
        }
    };
};
// Password Hashing 
export const hashPassword = async (password) => {
    return await bcrypt.hash(password, Number(config.bcrypt_salt_rounds));
};
export const verifyPassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
};
// JWT token
export const signToken = (payload) => {
    return jwt.sign(payload, config.jwt_access_secret);
};
export const verifyToken = (token) => {
    try {
        const payload = jwt.verify(token, config.jwt_access_secret);
        return {
            success: true,
            data: payload
        };
    }
    catch (error) {
        console.log("Token verification failed", error);
        return {
            success: false,
            error: error.message
        };
    }
};
//# sourceMappingURL=index.js.map