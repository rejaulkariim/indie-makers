import * as z from 'zod';

export const wishlistValidationSchema = z.object({
  email: z.string().email(),
});
