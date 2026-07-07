import { z } from 'zod';
export const createCustomerSchema = z.object({
    name: z.string()
        .min(1, "Name is required")
        .min(2, "Name must be at least 2 characters"),
    email: z.email("Invalid email format"),
    password: z.string()
        .min(6, "Password must be at least 6 characters"),
    role: z.literal('CUSTOMER')
        .default('CUSTOMER'),
    photo_url: z.string().optional()
});
export const updateCustomerSchema = z.object({
    name: z.string()
        .min(2, "Name must be at least 2 characters")
        .optional(),
    photo_url: z.string().optional()
});
//# sourceMappingURL=customer.schema.js.map