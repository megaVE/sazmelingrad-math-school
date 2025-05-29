import type { BaseInputProps } from '@/@types/BaseInput';
import type { InputHTMLAttributes } from 'react';
import styles from './Input.module.css';

interface InputProps
    extends InputHTMLAttributes<HTMLInputElement>,
        BaseInputProps {}

export function Input({ label, id, state, error, fill, ...props }: InputProps) {
    const stateProps: Partial<InputHTMLAttributes<HTMLInputElement>> = state
        ? {
              value: state[0],
              onChange: e => state[1](e.target.value, e.target.name),
          }
        : {};

    return (
        <div
            className={styles.input_container}
            style={{ ...(fill && { maxWidth: 'none' }) }}
        >
            {label && <label htmlFor={id}>{label}:</label>}
            <input type="text" id={id} name={id} {...stateProps} {...props} />
            {error && <small className="error">{error[0]}</small>}
        </div>
    );
}
