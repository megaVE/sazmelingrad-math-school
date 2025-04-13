import type { Question } from '@/@types/Question';
import type { DifficultyType } from '@/constants/maps/Difficulty';

export const questions: Question[] = [
    {
        difficulty: 'easy',
        description: 'Quanto é 5 + 8?',
        answers: [
            { value: '13', label: '13' },
            { value: '14', label: '14' },
            { value: '12', label: '12' },
            { value: '15', label: '15' },
        ],
        correctAnswer: '13',
        hints: ['Soma simples de dois números inteiros.'],
    },
    {
        difficulty: 'easy',
        description: 'Quanto é 17 + 2?',
        answers: [
            { value: '19', label: '19' },
            { value: '20', label: '20' },
            { value: '18', label: '18' },
            { value: '21', label: '21' },
        ],
        correctAnswer: '19',
        hints: ['Soma simples de dois números inteiros.'],
    },
    {
        difficulty: 'easy',
        description: 'Quanto é 13 + 3?',
        answers: [
            { value: '16', label: '16' },
            { value: '17', label: '17' },
            { value: '15', label: '15' },
            { value: '18', label: '18' },
        ],
        correctAnswer: '16',
        hints: ['Soma simples de dois números inteiros.'],
    },
    {
        difficulty: 'easy',
        description: 'Quanto é 18 + 17?',
        answers: [
            { value: '35', label: '35' },
            { value: '36', label: '36' },
            { value: '33', label: '33' },
            { value: '38', label: '38' },
        ],
        correctAnswer: '35',
        hints: ['Soma simples de dois números inteiros.'],
    },
    {
        difficulty: 'medium',
        description: 'Resolva a equação: 5x + 2 = 42. Qual o valor de x?',
        answers: [
            { value: '8', label: '8' },
            { value: '9', label: '9' },
            { value: '7', label: '7' },
            { value: '10', label: '10' },
        ],
        correctAnswer: '8',
        hints: ["Isolar a incógnita 'x'."],
    },
    {
        difficulty: 'medium',
        description: 'Resolva a equação: 2x + 2 = 22. Qual o valor de x?',
        answers: [
            { value: '10', label: '10' },
            { value: '11', label: '11' },
            { value: '9', label: '9' },
            { value: '12', label: '12' },
        ],
        correctAnswer: '10',
        hints: ["Isolar a incógnita 'x'."],
    },
    {
        difficulty: 'medium',
        description: 'Resolva a equação: 6x + 2 = 32. Qual o valor de x?',
        answers: [
            { value: '5', label: '5' },
            { value: '6', label: '6' },
            { value: '4', label: '4' },
            { value: '7', label: '7' },
        ],
        correctAnswer: '5',
        hints: ["Isolar a incógnita 'x'."],
    },
    {
        difficulty: 'hard',
        description: 'Qual é o valor de 4^3?',
        answers: [
            { value: '64', label: '64' },
            { value: '65', label: '65' },
            { value: '59', label: '59' },
            { value: '67', label: '67' },
        ],
        correctAnswer: '64',
        hints: [
            'Função exponencial: multiplicar a base por ela mesma o número de vezes indicado pelo expoente.',
        ],
    },
    {
        difficulty: 'hard',
        description: 'Qual é o valor de 2^4?',
        answers: [
            { value: '16', label: '16' },
            { value: '17', label: '17' },
            { value: '11', label: '11' },
            { value: '19', label: '19' },
        ],
        correctAnswer: '16',
        hints: [
            'Função exponencial: multiplicar a base por ela mesma o número de vezes indicado pelo expoente.',
        ],
    },
    {
        difficulty: 'hard',
        description: 'Qual é o valor de 5^2?',
        answers: [
            { value: '25', label: '25' },
            { value: '26', label: '26' },
            { value: '20', label: '20' },
            { value: '28', label: '28' },
        ],
        correctAnswer: '25',
        hints: [
            'Função exponencial: multiplicar a base por ela mesma o número de vezes indicado pelo expoente.',
        ],
    },
];

export const questionScores: Record<
    DifficultyType,
    { hit: number; miss: number }
> = {
    easy: {
        hit: 5,
        miss: -10,
    },
    medium: {
        hit: 10,
        miss: -7,
    },
    hard: {
        hit: 15,
        miss: -5,
    },
    very_hard: {
        hit: 20,
        miss: -3,
    },
};

const easyQuestions = questions.filter(
    question => question.difficulty === 'easy',
).length;
const mediumQuestions =
    easyQuestions +
    questions.filter(question => question.difficulty === 'medium').length;
const hardQuestions =
    mediumQuestions +
    questions.filter(question => question.difficulty === 'hard').length;
const veryHardQuestions =
    hardQuestions +
    questions.filter(question => question.difficulty === 'very_hard').length;

export const questionAmounts: Record<DifficultyType, number> = {
    easy: easyQuestions,
    medium: mediumQuestions,
    hard: hardQuestions,
    very_hard: veryHardQuestions,
};
