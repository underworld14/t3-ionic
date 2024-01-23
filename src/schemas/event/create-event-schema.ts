import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const createEventSchema = z.object({
    title: z.string().optional(),
    category: z.string().optional(),
    description: z.string().optional(),
    place: z.string().optional(),
    province_id: z.string().optional(),
    city_id: z.string().optional(),
    start_time: z.date().optional(),
    end_time: z.string().optional(),
    facilities: z.string().optional(),
    sessions: z.object({
        session: z.string(),
        description: z.string().optional()
    }).array(),
    image: z.any()
    
})

export type CreateEventSchema = z.infer<typeof createEventSchema>

export const createEventSchemaResolver = zodResolver(createEventSchema)