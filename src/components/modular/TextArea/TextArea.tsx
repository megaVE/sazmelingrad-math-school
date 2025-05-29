import type { BaseInputProps } from '@/@types/BaseInput';
import type { TextareaHTMLAttributes } from 'react';
import styles from './TextArea.module.css';

interface TextAreaProps
    extends TextareaHTMLAttributes<HTMLTextAreaElement>,
        BaseInputProps {}

export function TextArea({
    label,
    id,
    state,
    error,
    fill,
    ...props
}: TextAreaProps) {
    const stateProps: Partial<TextareaHTMLAttributes<HTMLTextAreaElement>> =
        state
            ? {
                  value: state[0],
                  onChange: e => state[1](e.target.value, e.target.name),
              }
            : {};

    return (
        <div
            className={styles.text_container}
            style={{ ...(fill && { maxWidth: 'none' }) }}
        >
            {label && <label htmlFor={id}>{label}:</label>}
            <textarea id={id} name={id} rows={2} {...stateProps} {...props} />
            {error && <small className="error">{error[0]}</small>}
        </div>
    );
}
