import htmlParse from 'html-react-parser';
import styles from './LilithSpeech.module.css';

import LilithImage from '@/assets/lilith_speech.png';
import { useEffect, useState } from 'react';

interface LilithSpeechProps {
    message: string[];
    imageProps?: { src?: string; alt?: string };
    onFinish?: () => void;
}

export function LilithSpeech({
    message,
    imageProps,
    onFinish,
}: LilithSpeechProps) {
    const [currentMessage, setCurrentMessage] = useState<number>(0);

    const hasNextMessage = currentMessage < message.length - 1;

    function toNextMessage() {
        setCurrentMessage(state => (hasNextMessage ? state + 1 : state));
    }

    useEffect(() => {
        if (hasNextMessage || !onFinish) return;

        onFinish();
    }, [currentMessage]);

    useEffect(() => {
        setCurrentMessage(0);
    }, [message]);

    return (
        <div className={styles.container}>
            <div className={styles.clickable_area} onClick={toNextMessage} />
            <figure className={styles.figure}>
                <img src={LilithImage} {...imageProps} alt="Lilith Speech" />
            </figure>
            <div className={styles.text_container}>
                <p>{htmlParse(message[currentMessage] ?? '')}</p>
                {hasNextMessage && <p>&#11167;</p>}
            </div>
        </div>
    );
}
