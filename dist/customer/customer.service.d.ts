import type { ICreateCustomerPayload, IUpdateCustomerPayload } from "../types";
export declare const customerService: {
    getAllCustomers: () => Promise<{
        name: string;
        email: string;
        role: import("../prisma/generated/prisma/enums").Role;
        photo_url: string | null;
        id: string;
        user_status: import("../prisma/generated/prisma/enums").UserStatus;
        created_at: Date;
        updated_at: Date;
    }[]>;
    getCustomerById: (id: string) => Promise<{
        name: string;
        email: string;
        role: import("../prisma/generated/prisma/enums").Role;
        photo_url: string | null;
        id: string;
        user_status: import("../prisma/generated/prisma/enums").UserStatus;
        created_at: Date;
        updated_at: Date;
    }>;
    createCustomer: (payload: ICreateCustomerPayload) => Promise<{
        name: string;
        email: string;
        role: import("../prisma/generated/prisma/enums").Role;
        photo_url: string | null;
        id: string;
        user_status: import("../prisma/generated/prisma/enums").UserStatus;
        created_at: Date;
        updated_at: Date;
    }>;
    updateCustomerById: (id: string, payload: IUpdateCustomerPayload) => Promise<{
        name: string;
        email: string;
        role: import("../prisma/generated/prisma/enums").Role;
        photo_url: string | null;
        id: string;
        user_status: import("../prisma/generated/prisma/enums").UserStatus;
        created_at: Date;
        updated_at: Date;
    }>;
    deleteCustomerById: (id: string) => Promise<boolean>;
};
//# sourceMappingURL=customer.service.d.ts.map