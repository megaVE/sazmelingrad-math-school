import { z } from 'zod';

export const requiredString = (minLength?: number) => {
    const requiredStringSchema = z
        .string()
        .min(1, { message: 'Este campo é obrigatório!' });

    if (!minLength) return requiredStringSchema;

    return requiredStringSchema.min(minLength, {
        message: `Este campo precisa ter no mínimo ${minLength} caracteres.`,
    });
};
