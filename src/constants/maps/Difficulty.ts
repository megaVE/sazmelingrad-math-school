export type DifficultyType = 'easy' | 'medium' | 'hard' | 'very_hard';

export const DifficultyMap = new Map<DifficultyType, string>([
    ['easy', 'Fácil'],
    ['medium', 'Médio'],
    ['hard', 'Difícil'],
    ['very_hard', 'Muito Difícil'],
]);
