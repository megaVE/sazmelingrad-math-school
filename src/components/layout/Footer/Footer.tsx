import { Splitter } from '@/components/modular/Splitter/Splitter';
import styles from './Footer.module.css';

const currentYear = new Date().getFullYear();

export function Footer() {
    return (
        <footer className={styles.footer}>
            <Splitter />
            <p>
                Ministério da Cultura e Propaganda de Sazmelingrad - &copy;{' '}
                {currentYear}
            </p>
        </footer>
    );
}
