import type { CSSProperties } from 'react';

export type DifficultyType = 'easy' | 'medium' | 'hard' | 'very_hard';

export const DifficultyMap = new Map<DifficultyType, string>([
    ['easy', 'Fácil'],
    ['medium', 'Médio'],
    ['hard', 'Difícil'],
    ['very_hard', 'Muito Difícil'],
]);

export const DifficultyColorMap = new Map<
    DifficultyType,
    Partial<CSSProperties>
>([
    [
        'easy',
        {
            backgroundColor: '#1a2e1a',
            color: '#a8ff60',
        },
    ],
    [
        'medium',
        {
            backgroundColor: '#2e2a1a',
            color: '#ffd36e',
        },
    ],
    [
        'hard',
        {
            backgroundColor: '#2e1e1a',
            color: '#ff6a00',
        },
    ],
    [
        'very_hard',
        {
            backgroundColor: '#2e1a1a',
            color: '#ff3c3c',
        },
    ],
]);
