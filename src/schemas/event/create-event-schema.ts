import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

function checkFileType(file: File[]) {
    if (file[0]?.name) {
        const fileType = file[0].name!.split(".").pop();
        if (fileType === "jpg" || fileType === "jpeg" || fileType === "png") return true;
    }
    return false;
}

export const createEventSchema = z.object({
    title: z.string().optional(),
    category_id: z.coerce.number().optional(),
    description: z.string().optional(),
    place: z.string().optional(),
    province_id: z.coerce.number().optional(),
    city_id: z.coerce.number().optional(),
    start_time: z.coerce.date().optional(),
    end_time: z.coerce.date().optional(),
    facilities: z.string().optional(),
    sessions: z.object({
        session: z.string(),
        description: z.string().optional()
    }).array().optional(),
    image: z.any().optional()
    // .refine((file) => checkFileType(file), "Only .jpg, .jpeg and .png formats are supported."),
    
})

export type CreateEventSchema = z.infer<typeof createEventSchema>

export const createEventSchemaResolver = zodResolver(createEventSchema)
