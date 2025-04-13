import type { FormHTMLAttributes, HTMLAttributes, ReactNode } from 'react';
import styles from './Form.module.css';

interface FormContainterProps extends FormHTMLAttributes<HTMLFormElement> {
    formTitle?: ReactNode;
    children: ReactNode;
}

function FormContainer({ formTitle, children, ...props }: FormContainterProps) {
    return (
        <div className={styles.form_container}>
            {formTitle && <h2>{formTitle}</h2>}
            <form {...props}>{children}</form>
        </div>
    );
}

interface FormSectionProps extends HTMLAttributes<HTMLElement> {
    columns?: number;
    children: ReactNode;
}

function FormSection({
    columns = 1,
    className,
    children,
    ...props
}: FormSectionProps) {
    return (
        <section
            {...props}
            className={`${styles.form_section} ${className}`}
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
