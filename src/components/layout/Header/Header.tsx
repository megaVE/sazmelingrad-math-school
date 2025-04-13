import { Splitter } from '@/components/modular/Splitter/Splitter';
import styles from './Header.module.css';

export function Header() {
    return (
        <header className={styles.header}>
            <h1>
                <span>Sazmelingrad Math School</span>
                <div className={styles.middle_trace} />
            </h1>
            <Splitter />
        </header>
    );
}
