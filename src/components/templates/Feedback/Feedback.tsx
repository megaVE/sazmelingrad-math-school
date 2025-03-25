import type { SelectOption } from '@/@types/SelectOption';
import { Button } from '@/components/Button/Button';
import styles from './Feedback.module.css';

type FeedbackOptions = {
    id?: string;
    option: SelectOption<string>;
    action: (value: string) => void;
};

interface FeedbackProps {
    feedbackOptions: FeedbackOptions[];
}

export function Feedback({ feedbackOptions }: FeedbackProps) {
    return (
        <div className={styles.container}>
            {feedbackOptions.map(feedbackOption => (
                <Button
                    key={feedbackOption.id ?? feedbackOption.option.value}
                    onClick={() =>
                        feedbackOption.action(feedbackOption.option.value)
                    }
                >
                    {feedbackOption.option.label}
                </Button>
            ))}
        </div>
    );
}
