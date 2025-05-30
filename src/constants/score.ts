import type { DifficultyType } from './maps/Difficulty';

export const HINT_FEE = 0.2; // 20%

export const QUESTION_SCORES: Record<
    DifficultyType,
    { hit: number; miss: number }
> = {
    easy: {
        hit: 5,
        miss: -10,
    },
    medium: {
        hit: 10,
        miss: -7,
    },
    hard: {
        hit: 15,
        miss: -5,
    },
    very_hard: {
        hit: 20,
        miss: -3,
    },
};
