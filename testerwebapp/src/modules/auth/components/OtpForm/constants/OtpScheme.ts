import * as z from 'zod';

export const OtpScheme = z.object({
  phone: z.string().min(1, { message: 'field can`t be blank' }),
});

export type OtpScheme = z.infer<typeof OtpScheme>;
