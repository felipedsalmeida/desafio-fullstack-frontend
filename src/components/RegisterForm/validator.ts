import {z} from "zod"

export const SignUpSchema = z.object({
    username: z.string(),
    first_name: z.string(),
    last_name: z.string(),
    email: z.string().email("Deve ser um e-mail"),
    birthdate: z.string(),
    telephone: z.string().min(10).max(11),
    profile_img: z.string(),
    password: z.string().nonempty("Senha é obrigatória")
})

export type SignUpData = z.infer<typeof SignUpSchema>