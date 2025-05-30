import type { Question, QuestionFeedback } from '@/@types/Question';
import { Button } from '@/components/modular/Button/Button';
import { TextArea } from '@/components/modular/TextArea/TextArea';
import { DifficultyMap, DifficultyThemeMap } from '@/constants/maps/Difficulty';
import { ThemeMap, type ThemeType } from '@/constants/maps/Theme';
import { HINT_FEE, QUESTION_SCORES } from '@/constants/score';
import { useProfileContext } from '@/contexts/ProfileContext';
import { useState } from 'react';
import { Form } from '../Form/Form';
import styles from './Question.module.css';

interface QuestionRenderProps {
    question: Question;
    onFinish: (feedback: QuestionFeedback) => void;
}

export function QuestionRender({ question, onFinish }: QuestionRenderProps) {
    const { profile, setProfile } = useProfileContext();

    const [currentAnswer, setCurrentAnswer] = useState('');
    const [usedHints, setUsedHints] = useState(0);

    const { hit: questionHitScore, miss: questionMissScore } =
        QUESTION_SCORES[question.difficulty];

    const hintCost = HINT_FEE * questionHitScore;

    function handleSelectAnswer(value: string) {
        setCurrentAnswer(state => (state === value ? '' : value));
    }

    const getScoreText = (score: number) =>
        `${score} Ponto${score > 1 || score < -1 ? 's' : ''}`;

    function handleConfirm() {
        const isAnswerCorrect = currentAnswer === question.correctAnswer;

        const answerScore = isAnswerCorrect
            ? questionHitScore
            : questionMissScore;

        setProfile({
            score: (profile.score as number) + answerScore,
        });

        onFinish(isAnswerCorrect ? 'hit' : 'miss');
    }

    function handleGiveUp() {
        const giveUpConfirm = window.confirm(
            'Tem certeza que deseja desistir desta questão? Você não perde e nem ganha nenhum ponto caso decida desistir.',
        );

        if (giveUpConfirm) {
            return onFinish('skipped');
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.question_header}>
                <span
                    style={{
                        ...ThemeMap.get(
                            DifficultyThemeMap.get(
                                question.difficulty,
                            ) as ThemeType,
                        ),
                    }}
                >
                    {DifficultyMap.get(question.difficulty)}
                </span>
                <span>
                    {getScoreText(questionHitScore - usedHints * hintCost)}{' '}
                    {usedHints > 0 && (
                        <>
                            ({getScoreText(questionHitScore)} -{' '}
                            {getScoreText(usedHints * hintCost)})
                        </>
                    )}
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
                                    theme="yellow"
                                    onClick={() =>
                                        setUsedHints(state => state + 1)
                                    }
                                    disabled={
                                        usedHints >= question.hints.length
                                    }
                                >
                                    Pedir Dica (- {hintCost} Pontos)
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
                <Button
                    className="feedback-button"
                    theme="red"
                    onClick={handleGiveUp}
                >
                    Desistir
                </Button>
                <Button
                    className="feedback-button"
                    theme="green"
                    onClick={handleConfirm}
                    disabled={!currentAnswer}
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
