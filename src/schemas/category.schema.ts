import { z } from 'zod';

export const createCategorySchema = z.object({
    name: z.string().min(1, "Category name is required").min(3, "Category name must be at least 3 characters"),
    description: z.string().min(20, "Category description must be at least 20 characters")
})

export const updateCategorySchema = createCategorySchema.partial()

export type TCreateCategoryPayload = z.infer<typeof createCategorySchema>;

export type TUpdateCategoryPayload = z.infer<typeof updateCategorySchema>;