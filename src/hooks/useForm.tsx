import type { ErrorObject } from '@/@types/ErrorObject';
import { type FormEvent, useState } from 'react';
import type { ZodType } from 'zod';

export function useForm<T extends object>(
    values: T,
    validator: ZodType,
    onSubmit: (values: T) => void,
) {
    const [errors, setErrors] = useState<Record<string, ErrorObject>>({});

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const feedback = validator.safeParse(values);
        if (!feedback.success) {
            return setErrors(feedback.error.flatten().fieldErrors);
        }

        onSubmit(values);
        setErrors({});
    }

    return {
        handleSubmit,
        errors,
    };
}
