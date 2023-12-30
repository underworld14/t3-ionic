import { z } from 'zod';
import { sign, verify } from 'jsonwebtoken';
import { hash, compare } from 'bcrypt';

import { env } from '~/env';
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';
import { TRPCError } from '@trpc/server';
import { registerSchema } from '~/schemas/register-schema';

export const authRouter = createTRPCRouter({
  register: publicProcedure.input(registerSchema).mutation(async ({ ctx, input }) => {
    // Check if email is already registered
    const emailExists = await ctx.db.users.findFirst({
      where: {
        email: input.email,
      },
    });

    if (emailExists) {
      throw new TRPCError({
        code: 'BAD_REQUEST',
        message: 'Email sudah terdaftar',
      });
    }

    await ctx.db.users.create({
      data: {
        email: input.email,
        name: input.name,
        password: await hash(input.password, 10),
        position_id: parseInt(input.position_id),
      },
    });

    return {
      message: 'Berhasil mendaftar, silahkan login',
    };
  }),
  login: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.db.users.findUnique({
        where: {
          email: input.email,
        },
      });

      if (!user) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'Invalid email or password',
        });
      }

      const valid = await compare(input.password, user.password);

      if (!valid) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'Invalid email or password',
        });
      }

      const token = sign({ userId: user.id }, env.SECRET_KEY, {
        expiresIn: '7d',
      });

      return {
        data: user,
        token,
      };
    }),
});
