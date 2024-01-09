import { Prisma } from '@prisma/client';
import { omit } from 'lodash-es';
import { z } from 'zod';

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

  updateUserProfile: authorizedProcedure
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
        teaching_level: z.enum(['SD', 'SMP', 'SMA', 'D1', 'D2', 'D3', 'S1', 'S2', 'S3']).optional(),
        bio: z.string().optional(),
        province_id: z.number().optional(),
        city_id: z.number().optional(),
        district_id: z.number().optional(),
        teacher_status: z.enum(['ASN', 'NON_ASN', 'PPK']).optional(),
        salary: z.number().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.db.users.findFirstOrThrow({
        where: {
          id: ctx.user.id,
        },
      });

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
            bio: input.bio,
            province_id: input.province_id,
            city_id: input.city_id,
            district_id: input.district_id,
            teacher_status: input.teacher_status,
            salary: input.salary,
            unit_kerja: input.unit_kerja,
            headmaster_name: input.headmaster_name,
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
});
