import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export const updatePasswordSchema = z
  .object({
    current_password: z.string().min(6, 'Password minimal 6 karakter'),
    password: z.string().min(6, 'Password minimal 6 karakter'),
    password_confirmation: z.string().min(6, 'Password minimal 6 karakter'),
  })
  .refine(data => data.password === data.password_confirmation, {
    message: 'Password dan konfirmasi password tidak sama',
    path: ['password_confirmation'],
  });

export type UpdatePasswordSchema = z.infer<typeof updatePasswordSchema>;

export const updatePasswordSchemaResolver = zodResolver(updatePasswordSchema);
