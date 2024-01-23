import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';

export const eventCategoryRouter = createTRPCRouter({
    indexEventCategory: publicProcedure.query(({ctx}) => {
        return ctx.db?.event_category.findMany()
    })
})