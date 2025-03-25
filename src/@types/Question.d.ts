import type { Difficulty } from './Difficulty';
import type { SelectOption } from './SelectOption';

export type Question = {
    title: string;
    difficulty: Difficulty;
    description: string;
    answers: SelectOption<string>[];
    correctAnswer: string;
    hints?: string[];
    customScore?: undefined;
};
