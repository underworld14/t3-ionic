import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export const profileGeneralInformationSchema = z.object({
    name: z.string(),
    nik: z.string().optional(),
    nip: z.string().optional(),
    birthdate: z.string().optional(),
    gender: z.enum(['L', 'P']).optional(),
    contact: z.string().optional(),
    teaching_level: z.enum(['SD', 'SMP', 'SMA', 'D1', 'D2', 'D3', 'D4',  'S1', 'S2', 'S3']).optional(),
    unit_kerja: z.string().optional(),
    headmaster_name: z.string().optional(),
    headmaster_nip: z.string().optional(),
    school_place: z.string().optional()
})

export type ProfileGeneralInformationSchema = z.infer<typeof profileGeneralInformationSchema>

export const profileGeneralInformationResolver = zodResolver(profileGeneralInformationSchema)