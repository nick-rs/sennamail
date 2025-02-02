import { z } from 'zod'

export const SignUpFormSchema = z.object({
    username: z.string().min(3, { message: "Username must be at least 3 characters." }).trim(),
    password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." })
    .regex(/[a-zA-Z]/, { message: "Contains at least one letter." })
    .regex(/[0-9]/, { message: "Contains at least one number." }) 
    .regex(/[^a-zA-Z0-9]/, { message: "Contains at least one special character." }).trim(),
})

export type FormState = | {
    errors?: {
        username?: string[]
        password?: string[]
    }
    message?: string
}
| undefined