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

        console.log('image trpc',input?.image?.["0"])

        await ctx.db?.events.create({
            data: {
                created_by: user?.id,
                title: input?.title,
                description: input?.description,
                category_id: input?.category_id,
                place: input?.place,
                province_id: input?.province_id,
                city_id: input?.city_id,
                start_time: input?.start_time,
                end_time: input?.end_time
                
            }
        })
    })
})