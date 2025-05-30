import type { CSSProperties } from 'react';

export type ThemeType = 'green' | 'yellow' | 'orange' | 'red';

export const ThemeMap = new Map<ThemeType, Partial<CSSProperties>>([
    [
        'green',
        {
            borderColor: '#a8ff60',
            backgroundColor: '#1a2e1a',
            color: '#a8ff60',
        },
    ],
    [
        'yellow',
        {
            borderColor: '#ffd36e',
            backgroundColor: '#2e2a1a',
            color: '#ffd36e',
        },
    ],
    [
        'orange',
        {
            borderColor: '#ff6a00',
            backgroundColor: '#2e1e1a',
            color: '#ff6a00',
        },
    ],
    [
        'red',
        {
            borderColor: '#ff3c3c',
            backgroundColor: '#2e1a1a',
            color: '#ff3c3c',
        },
    ],
]);
