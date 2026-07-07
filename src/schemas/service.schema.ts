import { z } from 'zod';

export const createServiceSchema = z.object({
    title: z.string().min(1, "title is required").min(5, "title must be at least 5 characters"),
    description: z.string().min(1, "description is required").min(20, "description must be at least 20 characters"),
    price: z.number().min(1, "price must be greater than 0"),
    estimated_time: z.number().min(1, "estimated_time must be greater than 0"),
    category_id: z.number().min(1, "category_id is required"),
})

export const updateServiceSchema = createServiceSchema.partial()

export type TCreateServicePayload = z.infer<typeof createServiceSchema>;

export type TUpdateServicePayload = z.infer<typeof updateServiceSchema>;