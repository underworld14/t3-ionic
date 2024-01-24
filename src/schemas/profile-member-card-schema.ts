import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export const profileMemberCardSchema = z.object({
  province_id: z.number(),
  city_id: z.number(),
  district_id: z.number(),
});

export type ProfilMemberCardSchema = z.infer<typeof profileMemberCardSchema>;

export const profileMemberCardSchemaResolver = zodResolver(profileMemberCardSchema);
