import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

export enum TEACHER_STATUS {
    ASN = 'ASN',
    NON_ASN = 'NON_ASN',
    PPK = 'PPK'
}

export enum STATUS_KEPEGAWAIAN {
    PNS_PEMDA = "PNS_PEMDA",
    PNS_KEMENAG = "PNS_KEMENAG",
    PPPK_PEMDA = "PPPK_PEMDA",
    PPPK_KEMENAG = "PPPK_KEMENAG",
    GTY = "GTY",
    HONOR_YAYASAN = "HONOR_YAYASAN",
    HONOR_DAERAH = "HONOR_DAERAH",
    HONOR_MURNI_SEKOLAH = "HONOR_MURNI_SEKOLAH",
  }

export const profileTeacherStatusSchema = z.object({
    teacher_status: z.enum([TEACHER_STATUS.ASN, TEACHER_STATUS.NON_ASN, TEACHER_STATUS.PPK]).optional(),
    salary: z.coerce.number().optional(),
    status_kepegawaian: z.enum([STATUS_KEPEGAWAIAN.PNS_PEMDA, STATUS_KEPEGAWAIAN.PNS_KEMENAG, STATUS_KEPEGAWAIAN.PPPK_KEMENAG, STATUS_KEPEGAWAIAN.PPPK_PEMDA, STATUS_KEPEGAWAIAN.GTY, STATUS_KEPEGAWAIAN.HONOR_DAERAH, STATUS_KEPEGAWAIAN.HONOR_MURNI_SEKOLAH, STATUS_KEPEGAWAIAN.HONOR_YAYASAN]).optional(),
    certified: z.boolean().optional(),
    bank_account: z.string().optional(),
    inpassing: z.boolean().optional(),
})

export type ProfileTeacherStatusSchema = z.infer<typeof profileTeacherStatusSchema>

export const profileTeacherStatusResolver = zodResolver(profileTeacherStatusSchema)