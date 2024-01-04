import { Prisma } from '@prisma/client';
import build from 'next/dist/build';
import { z } from 'zod';
import { createTRPCRouter, authorizedProcedure } from '~/server/api/trpc';
import { buildPaginationMetadata, getPagination } from '~/utils/helpers';

export const articleRouter = createTRPCRouter({
  index: authorizedProcedure
    .input(
      z
        .object({
          size: z.number().optional(),
          page: z.number().optional(),
        })
        .optional(),
    )
    .query(async ({ ctx, input }) => {
      const { skip, take, page } = getPagination(input?.page, input?.size);

      const articleQuery: Prisma.articlesFindManyArgs = {
        select: {
          id: true,
          title: true,
          slug: true,
          created_at: true,
          updated_at: true,
        },
        orderBy: {
          created_at: 'desc',
        },
        take,
        skip,
      };

      const [articles, totalArticle] = await Promise.all([
        ctx.db.articles.findMany({
          ...articleQuery,
        }),
        ctx.db.users.count(),
      ]);

      return {
        data: articles,
        metadata: buildPaginationMetadata(totalArticle, page, take),
      };
    }),
  show: authorizedProcedure
    .input(
      z.object({
        slug: z.string(),
      }),
    )
    .query(({ ctx, input }) => {
      return ctx.db.articles.findUnique({
        where: {
          slug: input.slug,
        },
      });
    }),
});
