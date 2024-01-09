import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';

export const locationRouter = createTRPCRouter({
  indexProvince: publicProcedure.query(({ ctx }) => {
    return ctx.db.provinces.findMany();
  }),
  indexCity: publicProcedure
    .input(
      z
        .object({
          province_id: z.number(),
        })
        .optional(),
    )
    .query(({ ctx, input }) => {
      return ctx.db.cities.findMany({
        where: {
          province_id: input?.province_id,
        },
      });
    }),
  indexDistrict: publicProcedure
    .input(
      z
        .object({
          city_id: z.number(),
        })
        .optional(),
    )
    .query(({ ctx, input }) => {
      return ctx.db.districts.findMany({
        where: {
          city_id: input?.city_id,
        },
      });
    }),
});
