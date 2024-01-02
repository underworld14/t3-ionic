import * as trpcNext from '@trpc/server/adapters/next';
import { decodeAndVerifyJwtToken } from '~/server/utils/security';
import { db } from '~/server/db';

export async function createContext({ req, res }: trpcNext.CreateNextContextOptions) {
  // Create your context based on the request object
  // Will be available as `ctx` in all your resolvers
  // This is just an example of something you might want to do in your ctx fn
  async function getUserFromHeader() {
    if (req.headers.authorization) {
      const user: {
        userId: string;
        iat: number;
        exp: number;
      } = await decodeAndVerifyJwtToken(req.headers.authorization.split(' ')[1]);

      return {
        ...user,
        id: parseInt(user.userId),
      };
    }
    return null;
  }
  const user = await getUserFromHeader();

  return {
    user,
    db,
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
