import type { DifficultyType } from '@/constants/maps/Difficulty';

export type ColorTheme = 'green' | 'yellow' | 'orange' | 'red';

export function themeToDifficulty(theme: ColorTheme) {
    const difficultyRecord: Record<ColorTheme, DifficultyType> = {
        green: 'easy',
        yellow: 'medium',
        orange: 'hard',
        red: 'very_hard',
    };

    return difficultyRecord[theme];
}
