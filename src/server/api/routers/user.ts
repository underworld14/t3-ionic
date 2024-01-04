import { Prisma } from '@prisma/client';
import { z } from 'zod';

import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';
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
});
