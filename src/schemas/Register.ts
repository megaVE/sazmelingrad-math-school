import { z } from 'zod';
import { requiredString } from './base/RequiredString';

export const Register = z.object({
    name: requiredString(3),
    age: z.string(),
});

export type RegisterType = z.infer<typeof Register>;
