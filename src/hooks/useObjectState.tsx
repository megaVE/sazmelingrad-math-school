import { useState } from 'react';

type ObjectState<T extends Record<string, unknown>> = [
    state: T,
    setProp: (value: unknown, name?: string) => void,
    setObject: (partial: Partial<T>) => void,
    reset: () => void,
];

export function useObjectState<T extends Record<string, unknown>>(
    initialState: T,
): ObjectState<T> {
    const [objectState, setObjectState] = useState<T>(initialState);

    const handlePropertyChange = (
        propertyValue: unknown,
        propertyName?: string,
    ) => {
        if (!propertyName || !(propertyName in initialState)) {
            throw new Error(`Invalid property used: ${propertyName}`);
        }
        setObjectState(state => ({ ...state, [propertyName]: propertyValue }));
    };

    const handleObjectUpdate = (partialObject: Partial<T>) => {
        setObjectState(state => ({ ...state, ...partialObject }));
    };

    const handleReset = () => {
        setObjectState(initialState);
    };

    return [objectState, handlePropertyChange, handleObjectUpdate, handleReset];
}
