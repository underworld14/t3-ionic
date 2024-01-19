import { Prisma } from '@prisma/client';
import { omit } from 'lodash-es';
import { z } from 'zod';
import { STATUS_KEPEGAWAIAN, TEACHER_STATUS, profileTeacherStatusSchema } from '~/schemas/profile-teacher-status-schema';

import { createTRPCRouter, publicProcedure, authorizedProcedure } from '~/server/api/trpc';
import { buildPaginationMetadata, getPagination } from '~/utils/helpers';

export const userRouter = createTRPCRouter({
  search: publicProcedure
    .input(
      z.object({
        email: z.string().email().optional(),
        name: z.string().optional(),
        page: z.number().optional(),
        size: z.number().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { skip, take, page } = getPagination(input.page, input.size);

      const userQuery: Prisma.usersFindManyArgs = {
        where: {
          OR: [
            {
              email: input.email,
            },
            {
              name: {
                contains: input.name,
              },
            },
          ],
        },
      };

      const [users, totalUsers] = await Promise.all([
        ctx.db.users.findMany({
          ...userQuery,
          skip,
          take,
        }),
        ctx.db.users.count({
          where: userQuery.where,
        }),
      ]);

      return {
        data: users,
        metadata: buildPaginationMetadata(totalUsers, page, take),
      };
    }),

  getCurrentProfile: authorizedProcedure.query(async ({ ctx }) => {
    const user = await ctx.db.users.findFirstOrThrow({
      where: {
        id: ctx.user.id,
      },
      select: {
        id: true,
        email: true,
        name: true,
        position: true,
        kta_id: true,
        profile: true,
      },
    });

    return user;
  }),

  updateProfileGeneralInformation: authorizedProcedure
    .input(
      z.object({
        // user table
        name: z.string().optional(),
        nik: z.string().optional(),
        nip: z.string().optional(),
        contact: z.string().optional(),
        birthdate: z.string().optional(),
        gender: z.enum(['L', 'P']).optional(),
        unit_kerja: z.string().optional(),
        headmaster_name: z.string().optional(),
        headmaster_nip: z.string().optional(),
        teaching_level: z.enum(['SD', 'SMP', 'SMA', 'D1', 'D2', 'D3', 'D4', 'S1', 'S2', 'S3']).optional(),
        school_place: z.string().optional()
        // bio: z.string().optional(),
        // teacher_status: z.enum(['ASN', 'NON_ASN', 'PPK']).optional(),
        // salary: z.number().optional(),
        // status_kepegawaian: z.enum(['PNS_PEMDA', 'PNS_KEMENAG', 'PPPK_PEMDA', 'PPPK_KEMENAG', 'GTY', 'HONOR_YAYASAN', 'HONOR_DAERAH', 'HONOR_MURNI_SEKOLAH']).optional(),
        // certified: z.boolean().optional(),
        // inpassing: z.boolean().optional(),
        // bank_account: z.string().optional()
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.db.users.findFirstOrThrow({
        where: {
          id: ctx.user.id,
        },
      });

      const profile = await ctx.db.profiles.findFirst({
        where: {
          user_id: user.id
        }
      })

      if (!profile) {
        await Promise.all([
          ctx.db.users.update({
            data: {
              name: input.name,
            },
            where: {
              id: user.id,
            },
          }),
          ctx.db.profiles.create({
            data: {
              user_id: user.id,
              nik: input.nik,
              nip: input.nip,
              contact: input.contact,
              birthdate: input.birthdate,
              gender: input.gender,
              teaching_level: input.teaching_level,
              // bio: input.bio,
              // province_id: input.province_id,
              // city_id: input.city_id,
              // district_id: input.district_id,
              // teacher_status: input.teacher_status,
              // salary: input.salary,
              // unit_kerja: input.unit_kerja,
              headmaster_name: input.headmaster_name,
              // status_kepegawaian: input.status_kepegawaian,
              // certified: input.certified,
              // inpassing: input.inpassing,
              // bank_account: input.bank_account
            },
          }),
        ]);
      }

      await Promise.all([
        ctx.db.users.update({
          data: {
            name: input.name,
          },
          where: {
            id: user.id,
          },
        }),
        ctx.db.profiles.update({
          data: {
            nik: input.nik,
            nip: input.nip,
            contact: input.contact,
            birthdate: input.birthdate,
            gender: input.gender,
            teaching_level: input.teaching_level,
            // bio: input.bio,
            // province_id: input.province_id,
            // city_id: input.city_id,
            // district_id: input.district_id,
            // teacher_status: input.teacher_status,
            // salary: input.salary,
            unit_kerja: input.unit_kerja,
            headmaster_name: input.headmaster_name,
            // status_kepegawaian: input.status_kepegawaian,
            // certified: input.certified,
            // inpassing: input.inpassing,
            // bank_account: input.bank_account
          },
          where: {
            user_id: user.id,
          },
        }),
      ]);

      return {
        message: 'Profil berhasil diperbarui',
      };
    }),
  updateBio: authorizedProcedure.input(
    z.object({
      bio: z.string().optional()
    })
  ).mutation(async ({ctx, input}) => {
    const user = await ctx.db.users.findFirstOrThrow({
      where: {
        id: ctx.user?.id
      }
    })

    await ctx.db?.profiles?.upsert({
      where: {
        user_id: user.id
      },
      update: {
        bio: input?.bio
      },
      create: {
        bio: input?.bio,
        user_id: user?.id
      }
    
    })

    return {
      message: 'Bio berhasil diperbarui'
    }
  }),

  updateUserRegion: authorizedProcedure.input(
    z.object({
      province_id: z.number().optional(),
      city_id: z.number().optional(),
      district_id: z.number().optional(),
    })
  ).mutation(async ({ctx, input} ) => {
    const user = await ctx.db.users.findFirstOrThrow({
      where: {
        id: ctx.user?.id
      }
    })

    await ctx.db?.profiles?.upsert({
      where: {
        user_id: user.id
      },
      update: {
        province_id: input?.province_id,
        city_id: input?.city_id,
        district_id: input?.district_id
      },
      create: {
        province_id: input?.province_id,
        city_id: input?.city_id,
        district_id: input?.district_id,
        user_id: user?.id
      }
    })

    return {
      message: 'User Region berhasil diperbarui'
    }
  }),

  updateUserStatus: authorizedProcedure.input(
    profileTeacherStatusSchema
  ).mutation(async ({ctx, input}) => {
    const user = await ctx.db.users.findFirstOrThrow({
      where: {
        id: ctx.user?.id
      }
    })

    await ctx.db?.profiles?.upsert({
      where: {
        user_id: user.id
      },
      update: {
        teacher_status: input?.teacher_status,
        salary: input?.salary ? Number(input?.salary) : 0,
        status_kepegawaian: input?.status_kepegawaian,
        certified: input?.certified,
        inpassing: input?.inpassing,
        bank_account: input?.bank_account
      },
      create: {
        teacher_status: input?.teacher_status,
        salary: input?.salary ? Number(input?.salary) : 0,
        status_kepegawaian: input?.status_kepegawaian,
        certified: input?.certified,
        inpassing: input?.inpassing,
        bank_account: input?.bank_account,
        user_id: user?.id
      }
    })

    return 'Status guru telah diperbarui'
  })
});
