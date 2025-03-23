import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

export function Button({ children, ...props }: ButtonProps) {
    return (
        <button className={styles.button} type="button" {...props}>
            {children}
        </button>
    );
}
