import z from "zod";

export const LoginSchema = z.object({
    email: z.email({
        error: "Invalid email format"
    }),
    password: z.string().min(6, {
        error: "Password must be more than 6 characters"
    })
})

export type LoginPayload = z.infer<typeof LoginSchema>