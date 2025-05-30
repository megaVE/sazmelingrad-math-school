import { ThemeMap, type ThemeType } from '@/constants/maps/Theme';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    theme?: ThemeType;
}

export function Button({ className, theme, children, ...props }: ButtonProps) {
    return (
        <button
            className={`${styles.button} ${className}`}
            type="button"
            style={{ ...(theme && ThemeMap.get(theme)) }}
            {...props}
        >
            {children}
        </button>
    );
}
