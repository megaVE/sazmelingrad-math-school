import type { Question } from '@/@types/Question';
import type { DifficultyType } from '@/constants/maps/Difficulty';

export const questions: Question[] = [];

export const questionScores: Record<
    DifficultyType,
    { hit: number; miss: number }
> = {
    easy: {
        hit: 0,
        miss: 0,
    },
    medium: {
        hit: 0,
        miss: 0,
    },
    hard: {
        hit: 0,
        miss: 0,
    },
    very_hard: {
        hit: 0,
        miss: 0,
    },
};
