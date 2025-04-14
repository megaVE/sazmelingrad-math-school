import { useEffect, useState } from 'react';

const SPECIAL_PAGE_PATH = '/src/pages/SpecialPage/SpecialPage';

export function SpecialPageLoader() {
    const [SpecialPageComponent, setSpecialPageComponent] = useState(
        <div>SpecialPage</div>,
    );

    useEffect(() => {
        const loadComponent = async () => {
            try {
                const module = await import(SPECIAL_PAGE_PATH);
                setSpecialPageComponent(<module.SpecialPage />);
            } catch (error) {
                console.error(error);
            }
        };

        loadComponent();
    }, []);

    return <>{SpecialPageComponent}</>;
}
