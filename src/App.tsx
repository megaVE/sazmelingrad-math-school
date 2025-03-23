import styles from './App.module.css';

import { Footer } from '@/components/layout/Footer/Footer';
import { Header } from '@/components/layout/Header/Header';
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
    ]);

    return (
        <>
            <Header />
            <main className={styles.container}>
                <RouterProvider router={router} />
            </main>
            <Footer />
        </>
    );
}
