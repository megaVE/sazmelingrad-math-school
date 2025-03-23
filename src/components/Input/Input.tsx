import type { InputHTMLAttributes } from 'react';
import styles from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    id: string;
}

export function Input({ label, id, ...props }: InputProps) {
    return (
        <div className={styles.input_container}>
            {label && <label htmlFor={id}>{label}:</label>}
            <input type="text" id={id} name={id} {...props} />
        </div>
    );
}
