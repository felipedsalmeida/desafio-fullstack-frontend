import { z } from "zod";

export const AddContactSchema = z.object({
    username: z.string(),
    first_name: z.string(),
    last_name: z.string(),
    email: z.string().email("Deve ser um e-mail"),
    birthdate: z.string(),
    telephone: z.string().min(10).max(11),
    profile_img: z.string()
})

export type AddContactData = z.infer<typeof AddContactSchema>