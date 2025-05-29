import type { DialogOption } from '@/@types/Dialog';
import { Button } from '@/components/modular/Button/Button';
import styles from './Feedback.module.css';

interface FeedbackProps {
    options: DialogOption[];
    handleFeedback: (value: string) => void;
}

export function Feedback({
    options: allOptions,
    handleFeedback,
}: FeedbackProps) {
    const options = allOptions.filter(option => !option.isBlocked);

    return (
        <div className={styles.container}>
            {options.map(({ label, value, onChoose, theme }) => (
                <Button
                    className="feedback-button"
                    key={label}
                    onClick={() => {
                        onChoose?.();
                        handleFeedback(value);
                    }}
                    theme={theme}
                >
                    {label}
                </Button>
            ))}
        </div>
    );
}
