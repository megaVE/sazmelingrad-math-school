import type { Question } from '@/@types/Question';
import { Button } from '@/components/modular/Button/Button';
import { TextArea } from '@/components/modular/TextArea/TextArea';
import { DifficultyMap } from '@/constants/maps/Difficulty';
import { questionScores } from '@/db/questions';
import { type CSSProperties, useMemo, useState } from 'react';
import { Form } from '../Form/Form';
import styles from './Question.module.css';

interface QuestionRenderProps {
    question: Question;
}

export function QuestionRender({ question }: QuestionRenderProps) {
    const [currentAnswer, setCurrentAnswer] = useState('');
    const [usedHints, setUsedHints] = useState(0);

    const questionScore = questionScores[question.difficulty].hit;

    const difficultyStyle = useMemo<Partial<CSSProperties>>(() => {
        switch (question.difficulty) {
            case 'easy':
                return {
                    backgroundColor: '#1a2e1a',
                    color: '#a8ff60',
                };

            case 'medium':
                return {
                    backgroundColor: '#2e2a1a',
                    color: '#ffd36e',
                };

            case 'hard':
                return {
                    backgroundColor: '#2e1e1a',
                    color: '#ff6a00',
                };

            case 'very_hard':
                return {
                    backgroundColor: '#2e1a1a',
                    color: '#ff3c3c',
                };

            default:
                return {};
        }
    }, [question.difficulty]);

    function handleSelectAnswer(value: string) {
        setCurrentAnswer(state => (state === value ? '' : value));
    }

    function handleAnalyseQuestion() {}

    return (
        <div className={styles.container}>
            <div className={styles.question_header}>
                <span style={{ ...difficultyStyle }}>
                    {DifficultyMap.get(question.difficulty)}
                </span>
                <span>
                    ({questionScore} Ponto{questionScore > 1 && 's'})
                </span>
                <p>&#65282;{question.description}&#65282;</p>
            </div>
            <ul className={styles.answers}>
                {question.answers.map(answer => (
                    <li
                        className={
                            answer.value === currentAnswer
                                ? styles.selected
                                : undefined
                        }
                        key={answer.value}
                        onClick={() => handleSelectAnswer(answer.value)}
                    >
                        {answer.label}
                    </li>
                ))}
            </ul>
            <ul className={styles.hints}>
                {question.hints ? (
                    <>
                        {usedHints < question.hints.length && (
                            <li>
                                <Button
                                    className="feedback-button"
                                    onClick={() =>
                                        setUsedHints(state => state + 1)
                                    }
                                    disabled={
                                        usedHints >= question.hints.length
                                    }
                                >
                                    Pedir Dica
                                </Button>
                            </li>
                        )}
                        {question.hints
                            .slice(0, usedHints)
                            .map((hint, hintIndex) => (
                                <li key={`hint-${hintIndex}`}>{hint}</li>
                            ))}
                    </>
                ) : (
                    <li>Sem dicas disponíveis</li>
                )}
            </ul>
            <Form.Section className={styles.confirmation}>
                <Button className="feedback-button" onClick={() => {}}>
                    Desistir
                </Button>
                <Button
                    className="feedback-button"
                    onClick={handleAnalyseQuestion}
                    disabled={Boolean(currentAnswer)}
                >
                    Confirmar
                </Button>
            </Form.Section>
            {true && (
                <Form.Section className={styles.sketch}>
                    <TextArea label="Rascunho" error={undefined} rows={5} />
                </Form.Section>
            )}
        </div>
    );
}
