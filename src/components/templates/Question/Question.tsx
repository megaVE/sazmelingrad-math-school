import type { Question } from '@/@types/Question';
import { Button } from '@/components/modular/Button/Button';
import { TextArea } from '@/components/modular/TextArea/TextArea';
import { DifficultyColorMap, DifficultyMap } from '@/constants/maps/Difficulty';
import { questionScores } from '@/db/questions';
import { useState } from 'react';
import { Form } from '../Form/Form';
import styles from './Question.module.css';

interface QuestionRenderProps {
    question: Question;
}

export function QuestionRender({ question }: QuestionRenderProps) {
    const [currentAnswer, setCurrentAnswer] = useState('');
    const [usedHints, setUsedHints] = useState(0);

    const questionScore = questionScores[question.difficulty].hit;

    function handleSelectAnswer(value: string) {
        setCurrentAnswer(state => (state === value ? '' : value));
    }

    function handleAnalyseQuestion() {}

    return (
        <div className={styles.container}>
            <div className={styles.question_header}>
                <span
                    style={{ ...DifficultyColorMap.get(question.difficulty) }}
                >
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
                    <TextArea
                        label="Rascunho"
                        style={{ width: '100%' }}
                        rows={5}
                        fill
                    />
                </Form.Section>
            )}
        </div>
    );
}
