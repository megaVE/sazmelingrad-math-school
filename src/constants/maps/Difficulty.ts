import type { ThemeType } from './Theme';

export type DifficultyType = 'easy' | 'medium' | 'hard' | 'very_hard';

export const DifficultyMap = new Map<DifficultyType, string>([
    ['easy', 'Fácil'],
    ['medium', 'Médio'],
    ['hard', 'Difícil'],
    ['very_hard', 'Muito Difícil'],
]);

export const DifficultyThemeMap = new Map<DifficultyType, ThemeType>([
    ['easy', 'green'],
    ['medium', 'yellow'],
    ['hard', 'orange'],
    ['very_hard', 'red'],
]);
