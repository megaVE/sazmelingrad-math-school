import type { Dispatch, SetStateAction } from 'react';

export type State<T> = [
    value: T,
    setValue: (
        newValue: T | Dispatch<T> | Dispatch<SetStateAction<T>>,
        fieldName?: string,
    ) => void,
];
