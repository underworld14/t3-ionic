import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

export const profileMemberCardSchema = z.object({
    province_id: z.onumber().optional(),
    city_id: z.onumber().optional(),
    district_id: z.onumber().optional(),
})

export type ProfilMemberCardSchema = z.infer<typeof profileMemberCardSchema>

export const profileMemberCardSchemaResolver = zodResolver(profileMemberCardSchema)