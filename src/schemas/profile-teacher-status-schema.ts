import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

export const profileTeacherStatusSchema = z.object({
    teacher_status: z.enum(['ASN', 'NON_ASN', 'PPK']).optional(),
    salary: z.number().optional()
})

export type ProfileTeacherStatusSchema = z.infer<typeof profileTeacherStatusSchema>

export const profileTeacherStatusResolver = zodResolver(profileTeacherStatusSchema)