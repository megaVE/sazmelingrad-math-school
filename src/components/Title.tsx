import { type ReactNode, useEffect } from 'react';

interface TitleProps {
    children: ReactNode;
}

export function Title({ children }: TitleProps) {
    useEffect(() => {
        document.title = `${children ? `${children.toString().replaceAll(',', '')} | ` : ''}Sazmelingrad Math School`;
    }, [children]);

    return null;
}
