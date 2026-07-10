import type { BookingStatus, Role, UserStatus } from "../prisma/generated/prisma/enums";

export type {
    TCreateCustomerPayload,
    TUpdateCustomerPayload
} from "../schemas/customer.schema";

export type {
    TCreateTechnicianPayload,
    TUpdateTechnicianPayload
} from '../schemas/technician.schema'

export type {
    TCreateCategoryPayload,
    TUpdateCategoryPayload
} from '../schemas/category.schema'

export type {
    TCreateServicePayload,
    TUpdateServicePayload
} from '../schemas/service.schema'

export type {
    TCreateAvailabilityPayload
} from '../schemas/availability.schema'

export type {
    TCreateBookingPayload,
    TUpdateBookingStatusPayload
} from '../schemas/booking.schema'

export interface JwtPayload {
    user_id: string;
    email: string;
    role: Role;
    user_status: UserStatus;
}

export interface IQuery {
    searchTerms?: string;
    page?: string;
    limit?: string;
    sortOrder?: "desc" | "asc",
    booking_status?: BookingStatus
}

export type TMeta = {
    totalPage: number;
    limit: number;
    totalDataCount: number;
}

export type TResponseHandler<T> = {
    success?: boolean;
    code: number;
    message: string;
    data?: T;
    meta?: TMeta
}