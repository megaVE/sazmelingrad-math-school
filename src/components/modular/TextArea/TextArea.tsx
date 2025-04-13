import type { ErrorObject } from '@/@types/ErrorObject';
import type { State } from '@/@types/State';
import type { TextareaHTMLAttributes } from 'react';
import styles from './TextArea.module.css';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    state?: State<string>;
    error: ErrorObject;
}

export function TextArea({ label, id, state, error, ...props }: TextAreaProps) {
    const stateProps: Partial<TextareaHTMLAttributes<HTMLTextAreaElement>> =
        state
            ? {
                  value: state[0],
                  onChange: e => state[1](e.target.value, e.target.name),
              }
            : {};

    return (
        <div className={styles.text_container}>
            {label && <label htmlFor={id}>{label}:</label>}
            <textarea id={id} name={id} rows={2} {...stateProps} {...props} />
            {error && <small className="error">{error[0]}</small>}
        </div>
    );
}
