import type { Role, UserStatus } from "../prisma/generated/prisma/enums";

export type {
    ICreateCustomerPayload,
    IUpdateCustomerPayload
} from "../schemas/customer.schema";

export type {
    ICreateTechnicianPayload,
    IUpdateTechnicianPayload
} from '../schemas/technician.schema'

export type {
    TCreateCategoryPayload,
    TUpdateCategoryPayload
} from '../schemas/category.schema'

export type {
    TCreateServicePayload,
    TUpdateServicePayload
} from '../schemas/service.schema'

export interface JwtPayload {
    user_id: string;
    email: string;
    role: Role;
    user_status: UserStatus;
}

export type TResponseHandler<T> = {
    success?: boolean;
    code: number;
    message: string;
    data?: T;
}