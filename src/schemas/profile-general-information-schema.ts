import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export enum GENDER {
    L = "L",
    P = "P"
}

export enum TEACHING_LEVEL {
    SD = "SD",
    SMP = "SMP",
    SMA = "SMA",
    D1 = "D1",
    D2 = "D2",
    D3 = "D3",
    D4 = "D4",
    S1 = "S1",
    S2 = "S2",
    S3 = "S3"
}

export const profileGeneralInformationSchema = z.object({
    name: z.string(),
    nik: z.string().optional(),
    nip: z.string().optional(),
    birthdate: z.string().optional(),
    gender: z.nativeEnum(GENDER).optional(),
    contact: z.string().optional(),
    teaching_level: z.nativeEnum(TEACHING_LEVEL).optional(),
    // teaching_level: z.enum([TEACHING_LEVEL.SD, TEACHING_LEVEL.SMP, TEACHING_LEVEL.SMA, TEACHING_LEVEL.D1, TEACHING_LEVEL.D2, TEACHING_LEVEL.D3, TEACHING_LEVEL.D4, TEACHING_LEVEL.S1, TEACHING_LEVEL.S2, TEACHING_LEVEL.S3]).optional(),
    unit_kerja: z.string().optional(),
    headmaster_name: z.string().optional(),
    headmaster_nip: z.string().optional(),
    school_place: z.string().optional()
})

export type ProfileGeneralInformationSchema = z.infer<typeof profileGeneralInformationSchema>

export const profileGeneralInformationResolver = zodResolver(profileGeneralInformationSchema)