import styles from './App.module.css';

import { Footer } from '@/components/layout/Footer/Footer';
import { Header } from '@/components/layout/Header/Header';
import { ProfileContextProvider } from '@/contexts/ProfileContext';
import { IntroductionPage } from '@/pages/IntroductionPage/IntroductionPage';
import { MainPage } from '@/pages/MainPage/MainPage';
import {
    Navigate,
    RouterProvider,
    createBrowserRouter,
} from 'react-router-dom';

export function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Navigate to="/home" replace />,
        },
        {
            path: '/home',
            element: <MainPage />,
        },
        {
            path: '/introduction',
            element: <IntroductionPage />,
        },
    ]);

    return (
        <>
            <Header />
            <main className={styles.container}>
                <ProfileContextProvider>
                    <RouterProvider router={router} />
                </ProfileContextProvider>
            </main>
            <Footer />
        </>
    );
}
