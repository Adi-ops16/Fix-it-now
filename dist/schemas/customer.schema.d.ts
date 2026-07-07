import { z } from 'zod';
export declare const createCustomerSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodEmail;
    password: z.ZodString;
    role: z.ZodDefault<z.ZodLiteral<"CUSTOMER">>;
    photo_url: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const updateCustomerSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    photo_url: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ICreateCustomerPayload = z.infer<typeof createCustomerSchema>;
export type IUpdateCustomerPayload = z.infer<typeof updateCustomerSchema>;
//# sourceMappingURL=customer.schema.d.ts.map