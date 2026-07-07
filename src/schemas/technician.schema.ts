import { z } from 'zod'

export const createTechnicianSchema = z.object({
    bio: z.string().min(20, "Bio must be at least 20 characters"),
    experience_year: z.number().int().min(0, "Experience year must be a non-negative integer"),
    hourly_rate: z.number().int().min(0, "Hourly rate must be a non-negative integer"),
    location: z.string().min(1, "Location is required").max(100, "Location must be at most 100 characters"),
})

export const updateTechnicianSchema = createTechnicianSchema.partial().refine(
    (data) => Object.keys(data).length > 0,
    {
        message: "At least one field must be provided for update",
    }
)


// Infer types from schemas
export type ICreateTechnicianPayload = z.infer<typeof createTechnicianSchema>

export type IUpdateTechnicianPayload = z.infer<typeof updateTechnicianSchema>