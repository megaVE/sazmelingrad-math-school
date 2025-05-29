import { type ColorTheme, themeToDifficulty } from '@/@types/Themes';
import { DifficultyColorMap } from '@/constants/maps/Difficulty';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    theme?: ColorTheme;
}

export function Button({ className, theme, children, ...props }: ButtonProps) {
    function getThemeCssProps() {
        if (!theme) return {};

        const difficulty = themeToDifficulty(theme);

        return { style: DifficultyColorMap.get(difficulty) };
    }

    return (
        <button
            className={`${styles.button} ${className}`}
            type="button"
            {...getThemeCssProps()}
            {...props}
        >
            {children}
        </button>
    );
}
