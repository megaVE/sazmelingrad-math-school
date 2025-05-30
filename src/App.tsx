import styles from './App.module.css';

import { Footer } from '@/components/layout/Footer/Footer';
import { Header } from '@/components/layout/Header/Header';
import { ProfileContextProvider } from '@/contexts/ProfileContext';
import { FeedbackPage } from '@/pages/FeedbackPage/FeedbackPage';
import { IntroductionPage } from '@/pages/IntroductionPage/IntroductionPage';
import { MainPage } from '@/pages/MainPage/MainPage';
import { QuestionPage } from '@/pages/QuestionPage/QuestionPage';
import { RecoverPage } from '@/pages/RecoverPage/RecoverPage';
import { SpecialPageLoader } from '@/pages/SpecialPageLoader';
import { TutorialPage } from '@/pages/TutorialPage/TutorialPage';
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
        {
            path: '/tutorial',
            element: <TutorialPage />,
        },
        {
            path: '/question/:id',
            element: <QuestionPage />,
        },
        {
            path: '/question/:id/feedback',
            element: <FeedbackPage />,
        },
        {
            path: '/recover',
            element: <RecoverPage />,
        },
        {
            path: '/special',
            element: <SpecialPageLoader />,
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
