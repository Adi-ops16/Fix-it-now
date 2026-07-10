import { z } from 'zod';
import { UserStatus } from '../prisma/generated/prisma/enums';

export const createCustomerSchema = z.object({
    name: z.string()
        .min(1, "Name is required")
        .min(2, "Name must be at least 2 characters"),
    email: z.email("Invalid email format"),
    password: z.string()
        .min(6, "Password must be at least 6 characters"),
    role: z.literal('CUSTOMER')
        .default('CUSTOMER'),
    photo_url: z.string().nullable().default(null)
});

export const updateCustomerSchema = z.object({
    name: z.string()
        .min(2, "Name must be at least 2 characters")
        .optional(),
    photo_url: z.string().optional()
});

export const manageCustomersSchema = z.object({
    userStatus: z.enum(UserStatus, {
        error: "status must be a valid enum"
    }),
    userId: z.uuid({
        error: "user_id must be a valid uuid"
    })
})

// Infer types from schemas
export type TCreateCustomerPayload = z.infer<typeof createCustomerSchema>;

export type TUpdateCustomerPayload = z.infer<typeof updateCustomerSchema>;

export type TManageCustomerPayload = z.infer<typeof manageCustomersSchema>;

