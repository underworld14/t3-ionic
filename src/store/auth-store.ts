import type { users } from '@prisma/client';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type AuthStore = {
  user: Omit<users, 'password'> | null;
  token: string | null;
  setAuth: (data: { user: Omit<users, 'password'>; token: string }) => void;
  logout: () => void;
};

export const useAuthStore = create(
  persist<AuthStore>(
    set => ({
      user: null,
      token: null,
      setAuth: ({ user, token }) => {
        set({ user, token });
      },
      logout: () => {
        set({ user: null, token: null });
      },
    }),
    {
      name: 'agpaii:auth', // Name of the store for persistence
    },
  ),
);
