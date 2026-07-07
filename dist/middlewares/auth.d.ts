import type { NextFunction, Request, Response } from "express";
import type { Role, UserStatus } from "../prisma/generated/prisma/enums";
declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string;
                email: string;
                role: Role;
                user_status: UserStatus;
            };
        }
    }
}
declare const auth: (...roles: Role[]) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
export default auth;
//# sourceMappingURL=auth.d.ts.map