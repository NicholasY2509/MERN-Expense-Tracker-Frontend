import { z } from 'zod'

export const loginSchema = z.object({
    email: z.string().email('Please enter a valid email address'),
    password: z.string().min(1, 'Password is required')
})

export type LoginFormInputs = z.infer<typeof loginSchema>

export const registerSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Please enter a valid email address'),
    password: z.string().min(1, 'Password is required'),
    passwordConfirmation: z.string().min(1, 'Password confirmation is required')
}).refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords don't match",
    path: ["passwordConfirmation"],
})

export type RegisterFormInputs = z.infer<typeof registerSchema>

