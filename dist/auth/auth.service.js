import status from "http-status";
import { prisma } from "../lib/prisma";
import { AppError, signToken, verifyPassword } from "../utils";
const loginUserIntoDB = async (payload) => {
    const { email, password } = payload;
    const user = await prisma.user.findUnique({
        where: { email },
        omit: {
            photo_url: true,
            updated_at: true,
            created_at: true,
            name: true
        }
    });
    if (!user) {
        throw new AppError(status.NOT_FOUND, "User not found. please create an account");
    }
    const isValidPass = await verifyPassword(password, user?.password);
    if (!isValidPass) {
        throw new AppError(status.BAD_REQUEST, "Invalid Password");
    }
    const jwtPayload = {
        user_id: user.id,
        email,
        role: user.role,
        user_status: user.user_status
    };
    const accessToken = signToken(jwtPayload);
    return { accessToken };
};
export { loginUserIntoDB };
//# sourceMappingURL=auth.service.js.map