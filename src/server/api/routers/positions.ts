import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';

export const positionRouter = createTRPCRouter({
  index: publicProcedure.query(({ ctx }) => {
    return ctx.db.positions.findMany();
  }),
});
