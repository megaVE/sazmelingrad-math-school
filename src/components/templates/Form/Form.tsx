import type { ReactNode } from 'react';

interface FormContainterProps {
    children: ReactNode;
}

function FormContainer({ children }: FormContainterProps) {
    return <form>{children}</form>;
}

interface FormSectionProps {
    children: ReactNode;
}

function FormSection({ children }: FormSectionProps) {
    return <section>{children}</section>;
}

export const Form = {
    Container: FormContainer,
    Section: FormSection,
};
