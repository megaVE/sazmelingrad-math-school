import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

export function Button({ className, children, ...props }: ButtonProps) {
    return (
        <button
            className={`${styles.button} ${className}`}
            type="button"
            {...props}
        >
            {children}
        </button>
    );
}
