import { z } from "zod";
import { AddContactSchema } from "../ModalAddContact/validator";

export const EditContactSchema = AddContactSchema.partial()

export type EditContactData = z.infer<typeof EditContactSchema>