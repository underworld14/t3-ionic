import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export const biografiSchema = z.object({
    bio: z.string().optional()
})

export type BiografiSchema = z.infer<typeof biografiSchema>

export const biografiSchemaResolver = zodResolver(biografiSchema)