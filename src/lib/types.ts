import { z } from 'zod';

export const FormSchema = z.object({
  email: z.string().describe('Email').email({ message: 'Invalid message' }),
  password: z.string().describe('Password').min(1, 'Password is required'),
});
