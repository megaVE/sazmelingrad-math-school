import type { ErrorObject } from '@/@types/ErrorObject';
import type { State } from '@/@types/State';
import type { InputHTMLAttributes } from 'react';
import styles from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    state?: State<string>;
    error: ErrorObject;
}

export function Input({ label, id, state, error, ...props }: InputProps) {
    const stateProps: Partial<InputHTMLAttributes<HTMLInputElement>> = state
        ? {
              value: state[0],
              onChange: e => state[1](e.target.value, e.target.name),
          }
        : {};

    return (
        <div className={styles.input_container}>
            {label && <label htmlFor={id}>{label}:</label>}
            <input type="text" id={id} name={id} {...stateProps} {...props} />
            {error && <small className="error">{error[0]}</small>}
        </div>
    );
}
