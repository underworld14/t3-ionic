import { createTRPCRouter } from '~/server/api/trpc';
import { userRouter } from './routers/user';
import { authRouter } from './routers/auth';
import { positionRouter } from './routers/positions';
import { articleRouter } from './routers/article';

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  user: userRouter,
  auth: authRouter,
  position: positionRouter,
  article: articleRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
