import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export const registerSchema = z
  .object({
    email: z.string().email('Email tidak valid').min(1, 'Email wajib diisi'),
    name: z.string().min(1, 'Nama wajib diisi'),
    password: z.string().min(6, 'Password minimal 6 karakter'),
    password_confirmation: z.string().min(6, 'Password minimal 6 karakter'),
    position_id: z.string().min(1, 'Posisi wajib diisi'),
  })
  .refine(data => data.password === data.password_confirmation, {
    message: 'Password dan konfirmasi password tidak sama',
    path: ['password_confirmation'],
  });

export type RegisterSchema = z.infer<typeof registerSchema>;

export const registerSchemaResolver = zodResolver(registerSchema);
