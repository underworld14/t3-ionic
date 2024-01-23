import { z } from 'zod';
import { omit } from 'lodash-es';
import { Prisma } from '@prisma/client';
import { biografiSchema } from '~/schemas/biografi-schema';
import { profileGeneralInformationSchema } from '~/schemas/profile-general-information-schema';
import { profileMemberCardSchema } from '~/schemas/profile-member-card-schema';
import { profileTeacherStatusSchema } from '~/schemas/profile-teacher-status-schema';

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
    const user = await ctx.db.users.findUniqueOrThrow({
      where: {
        id: ctx.user.id,
      },
      include: {
        profile: true,
        position: true,
      },
    });

    return omit(user, ['password']);
  }),

  updateProfileGeneralInformation: authorizedProcedure
    .input(profileGeneralInformationSchema)
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.db.users.findFirstOrThrow({
        where: {
          id: ctx.user.id,
        },
      });

      await ctx.db.users.update({
        where: {
          id: user?.id,
        },
        data: {
          name: input?.name,
        },
      });

      await ctx.db?.profiles?.upsert({
        where: {
          user_id: user.id,
        },
        update: {
          nik: input?.nik,
          nip: input?.nip,
          birthdate: input?.birthdate ? new Date(input?.birthdate).toISOString() : null,
          gender: input?.gender,
          contact: input?.contact,
          teaching_level: input?.teaching_level,
          unit_kerja: input?.unit_kerja,
          headmaster_name: input?.headmaster_name,
          headmaster_nip: input?.headmaster_nip,
          school_place: input?.school_place,
        },
        create: {
          nik: input?.nik,
          nip: input?.nip,
          birthdate: input?.birthdate ? new Date(input?.birthdate).toISOString() : null,
          gender: input?.gender,
          contact: input?.contact,
          teaching_level: input?.teaching_level,
          unit_kerja: input?.unit_kerja,
          headmaster_name: input?.headmaster_name,
          headmaster_nip: input?.headmaster_nip,
          school_place: input?.school_place,
          user_id: user?.id,
        },
      });

      return {
        message: 'Profil berhasil diperbarui',
      };
    }),

  updateBio: authorizedProcedure.input(biografiSchema).mutation(async ({ ctx, input }) => {
    const user = await ctx.db.users.findFirstOrThrow({
      where: {
        id: ctx.user?.id,
      },
    });

    await ctx.db?.profiles?.upsert({
      where: {
        user_id: user.id,
      },
      update: {
        bio: input?.bio,
      },
      create: {
        bio: input?.bio,
        user_id: user?.id,
      },
    });

    return {
      message: 'Bio berhasil diperbarui',
    };
  }),

  updateUserRegion: authorizedProcedure
    .input(profileMemberCardSchema)
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.db.users.findFirstOrThrow({
        where: {
          id: ctx.user?.id,
        },
      });

      const profile = await ctx.db?.profiles?.findFirst({
        where: {
          user_id: user?.id,
        },
      });

      if (profile && profile?.province_id && profile?.city_id && profile?.district_id) {
        await ctx?.db?.users?.update({
          where: {
            id: user?.id,
          },
          data: {
            kta_id: `${profile?.province_id}${profile?.city_id}${profile?.district_id}${user?.id}`,
          },
        });
      }

      await ctx.db?.profiles?.upsert({
        where: {
          user_id: user.id,
        },
        update: {
          province_id: input?.province_id,
          city_id: input?.city_id,
          district_id: input?.district_id,
        },
        create: {
          province_id: input?.province_id,
          city_id: input?.city_id,
          district_id: input?.district_id,
          user_id: user?.id,
        },
      });

      return {
        message: 'User Region berhasil diperbarui',
      };
    }),

  updateUserStatus: authorizedProcedure
    .input(profileTeacherStatusSchema)
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.db.users.findFirstOrThrow({
        where: {
          id: ctx.user?.id,
        },
      });

      await ctx.db?.profiles?.upsert({
        where: {
          user_id: user.id,
        },
        update: {
          teacher_status: input?.teacher_status,
          salary: input?.salary ? Number(input?.salary) : 0,
          status_kepegawaian: input?.status_kepegawaian,
          certified: input?.certified,
          inpassing: input?.inpassing,
          bank_account: input?.bank_account,
        },
        create: {
          teacher_status: input?.teacher_status,
          salary: input?.salary ? Number(input?.salary) : 0,
          status_kepegawaian: input?.status_kepegawaian,
          certified: input?.certified,
          inpassing: input?.inpassing,
          bank_account: input?.bank_account,
          user_id: user?.id,
        },
      });

      return 'Status guru telah diperbarui';
    }),
});
