import type { SelectOption } from '@/@types/SelectOption';
import type { DifficultyType } from '@/constants/maps/Difficulty';

export type Question = {
    difficulty: DifficultyType;
    description: string;
    answers: SelectOption<string>[];
    correctAnswer: string;
    hints?: string[];
};
