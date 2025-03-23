import { z } from 'zod';

export const StringNumber = (isInteger = false) =>
    z
        .string()
        .transform(string =>
            isInteger ? Number.parseInt(string) : Number.parseFloat(string),
        );
