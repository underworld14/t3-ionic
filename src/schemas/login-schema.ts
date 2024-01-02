import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export const loginSchema = z.object({
  email: z.string().email('Email tidak valid').min(1, 'Email wajib diisi'),
  password: z.string().min(6, 'Password minimal 6 karakter'),
});

export type LoginSchema = z.infer<typeof loginSchema>;

export const loginSchemaResolver = zodResolver(loginSchema);
