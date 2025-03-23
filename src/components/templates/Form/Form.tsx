import type { FormHTMLAttributes, HTMLAttributes, ReactNode } from 'react';
import styles from './Form.module.css';

interface FormContainterProps extends FormHTMLAttributes<HTMLFormElement> {
    children: ReactNode;
}

function FormContainer({ children, ...props }: FormContainterProps) {
    return (
        <form className={styles.form_container} {...props}>
            {children}
        </form>
    );
}

interface FormSectionProps extends HTMLAttributes<HTMLElement> {
    columns?: number;
    children: ReactNode;
}

function FormSection({ columns = 1, children, ...props }: FormSectionProps) {
    return (
        <section
            {...props}
            className={styles.form_section}
            style={{
                gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
            }}
        >
            {children}
        </section>
    );
}

export const Form = {
    Container: FormContainer,
    Section: FormSection,
};
