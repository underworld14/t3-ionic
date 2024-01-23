import { z } from 'zod';
import { createEventSchema } from '~/schemas/event/create-event-schema';
import { createTRPCRouter, authorizedProcedure } from '~/server/api/trpc';


export const eventRouter = createTRPCRouter({
    createEvent: authorizedProcedure.input(
        createEventSchema
    ).mutation(async ({ctx, input}) => {
        const user = await ctx.db?.users?.findFirstOrThrow({
            where: {
                id: ctx?.user?.id,
            }
        })

        await ctx.db?.events.create({
            data: {
                created_by: user?.id,
                title: input?.title,
                
            }
        })
    })
})