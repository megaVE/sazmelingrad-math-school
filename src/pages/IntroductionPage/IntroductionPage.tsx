import { LilithSpeech } from '@/components/layout/LilithSpeech/LilithSpeech';
import { Feedback } from '@/components/templates/Feedback/Feedback';
import { useProfileContext } from '@/contexts/ProfileContext';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type PhaseType = -1 | 0 | 1 | 2 | 3 | 4;

export function IntroductionPage() {
    const navigate = useNavigate();
    const { profile, setProfile } = useProfileContext();

    const [phase, setPhase] = useState<PhaseType>(() =>
        !profile.name || !profile.age ? -1 : 0,
    );
    const [isWaitingFeedback, setIsWaitingFeedback] = useState(false);

    function handleAction(value: string) {
        if (value === 'back') {
            return navigate('/');
        }

        if (value === 'no') {
            switch (phase) {
                case 0:
                    setProfile({ knowledgeLevel: 'easy' });
                    break;

                case 1:
                    setProfile({ knowledgeLevel: 'medium' });
                    break;

                case 2:
                    setProfile({ knowledgeLevel: 'hard' });
                    break;

                case 3:
                    setProfile({ knowledgeLevel: 'very_hard' });
                    break;
            }
        }

        setPhase(state => (state + 1) as PhaseType);
    }

    const fallbackSpeech = useMemo(() => {
        return [
            'Olá, undefined!',
            'Não... espera... você pulou a parte de registro, não é, criatura safada?',
            'Não acredito que você realmente pensou mesmo que isso passaria batido por mim...',
            'Vá. Volte pra página inicial e termina seu cadastro. <b>Isso foi uma ordem...<b/>',
        ];
    }, [profile.name, profile.age]);

    const firstSpeech = useMemo(() => {
        const speechArray: string[] = [];

        speechArray.push(`Olá, ${profile.name}!`);
        speechArray.push(
            'Meu nome é <b>Guia Vermelha</b>, como você já deve ter lido, mas pode me chamar de <b>Scarlilith</b>, para deixarmos as coisas mais simples...',
        );
        speechArray.push(
            'Primeiramente, eu gostaria de parabenizá-lo por sua entrada na <b>Escola de Matemática Nacional de Sazmelingrado</b>.',
        );
        speechArray.push(
            `É um feito impressionante, principalmente para uma humilde criatrinha de ${profile.age} anos como você...`,
        );
        speechArray.push(
            'Mas chega de enrolação. Você veio aqui pra aprender matemática, então vamos logo aos números, não é mesmo?',
        );
        speechArray.push(
            'Antes de começar, eu gostaria de saber um pouco mais sobre suas atuais capacidades com o campo das exatas...',
        );
        speechArray.push(
            'Me diga... Você ainda tem alguma dificuldade com operações básicas, como <b>somar(+), subtrair(-), multiplicar(&times;), dividir(&#xf7;), elevar(^) e radicalizar(&radic;)</b>? Sabe trabalhar com <b>frações, porcentagem, regra de 3, MMC e MDC</b>?',
        );

        return speechArray;
    }, [profile.name, profile.age]);

    const secondSpeech = useMemo(() => {
        if (profile.knowledgeLevel === 'easy')
            return [
                'Ah, tudo bem. Eu entendo que sua cabecinha deve ser meio limitada, então vamos tentar te ajudar com isso.',
            ];

        const speechArray: string[] = [];

        speechArray.push(
            'Mas é claro que você sabe, não é? Que pergunta óbvia...',
        );
        speechArray.push(
            'Isso significa que <b>Perguntas Fáceis</b> não serão um grande desafio para você, mas vou fazer algumas de vez em quando, só pra garantir que você não mentiu...',
        );
        speechArray.push(
            'Dito isso. Vamos continuar nossa entrevista de introdução! Você se sente confortável resolvendo tópicos como <b>Equações de 1º e 2º Grau, Regra de 3, Razão e Proporção, Média, Mediana, Moda, Funções e Gráficos</b>?',
        );

        return speechArray;
    }, [profile.name, profile.age, profile.knowledgeLevel]);

    const thirdSpeech = useMemo(() => {
        if (profile.knowledgeLevel === 'easy')
            return [
                'Entendo. Vocês têm suas dificuldades e eu preciso ser paciente com isso. É por este motivo que eu fui criada, afinal...',
            ];

        const speechArray: string[] = [];

        speechArray.push(
            'Impressionante. É um orgulho, ou uma pena que este fato já te coloque na frente de muitos outros cidadãos do nosso país maravilhoso.',
        );
        speechArray.push(
            'Você tem o conhecimento de um <b>Aluno de Ensino Médio</b>, ou pelo menos que um deles se esperaria ter...',
        );
        speechArray.push(
            `Agora... vamos separar a <b>Plebe</b> da <b>Verdadeira Aristocracia</b>. Me conte, <b>${profile.name}</b>, você é capaz de resolver e trabalhar com problemas de <b>Funções Exponenciais, Logaritmos, Análise Combinatória, Probabilidade, Matrizes, Geometria e Trigonometria</b>?`,
        );

        return speechArray;
    }, [profile.name, profile.age, profile.knowledgeLevel]);

    const fourthSpeech = useMemo(() => {
        if (profile.knowledgeLevel === 'medium') {
            return [
                'Tudo bem. Eu entendo que alguns desses tópicos podem parecer assustadores, principalmente quando é sua primeira vez, mas você pode revisar sua escolha mais tarde quando sentir-se mais habilitado a trabalhar com esses tópicos que mencionei.',
            ];
        }

        const speechArray: string[] = [];

        speechArray.push(
            'Uau... temos um <b>Mestre das Exatas</b> aqui, não é?',
        );
        speechArray.push(
            'Talentos assim são raros e você deveria se orgulhar disso. De forma humilde, é claro...',
        );
        speechArray.push(
            'Mas... uma dúvida. Já que você parece ser tão inteligente assim.',
        );
        speechArray.push(
            'Será que... por um acaso, você também conseguiria resolver questões que envolvem <b>Teoria de Limites, Funções Contínuas, Geometria Analítica, Sistemas Linears, Raízes Complexas, Transformações Geométricas e Otimização de Funções</b>?',
        );

        return speechArray;
    }, [profile.name, profile.age, profile.knowledgeLevel]);

    const fifthSpeech = useMemo(() => {
        if (profile.knowledgeLevel === 'hard') {
            return [
                'É claro, isso foi uma piada. O que você estaria fazendo aqui afinal se já estivesse nesse nível?',
            ];
        }

        const speechArray: string[] = [];

        speechArray.push('O-O que?! Isso foi uma piada, não é?');
        speechArray.push(
            `Hahahaha. Muito engraçado, ${profile.name}, você tem um senso de humor incrível...`,
        );
        speechArray.push('...');
        speechArray.push('.....');
        speechArray.push('.......');
        speechArray.push(
            'E-Espera, você <b>realmente</b> sabe esse tipo de coisa?!',
        );
        speechArray.push(
            'Minha Deusa,... eu sinceramente não sei o que dizer mais...',
        );
        speechArray.push(
            `Não, eu vou ser sincera: ${profile.name}, Moye Lyubimoye, você não deveria estar aqui. Esta página é uma <b>Escola de Matemática</b> e não uma <b>Academia Ciêntífica</b>`,
        );
        speechArray.push(
            'Você deveria parar de perder seu tempo com <b>problemas bobinhos</b> e ir logo de uma vez trabalhar pra <b>Aeronautica Espacial de Sazmelingrado</b>, e não, não estou sendo irônica, precisamos de muitos como você por lá.',
        );

        return speechArray;
    }, [profile.name, profile.age, profile.knowledgeLevel]);

    const speeches: Record<PhaseType, string[]> = useMemo(
        () => ({
            [-1]: fallbackSpeech,
            [0]: firstSpeech,
            [1]: secondSpeech,
            [2]: thirdSpeech,
            [3]: fourthSpeech,
            [4]: fifthSpeech,
        }),
        [profile.name, profile.age],
    );

    const feedbackOptions =
        phase >= 0 && phase !== 4
            ? [
                  {
                      option: {
                          value: 'yes',
                          label: 'Sim',
                      },
                      action: handleAction,
                  },
                  {
                      option: {
                          value: 'no',
                          label: 'Não',
                      },
                      action: handleAction,
                  },
              ]
            : [
                  {
                      option: {
                          value: 'back',
                          label: 'Voltar',
                      },
                      action: handleAction,
                  },
              ];

    function handleFinish() {
        if (phase === 4) return navigate('/');

        return setIsWaitingFeedback(true);
    }

    return (
        <>
            <LilithSpeech message={speeches[phase]} onFinish={handleFinish} />
            {isWaitingFeedback && (
                <Feedback feedbackOptions={feedbackOptions} />
            )}
        </>
    );
}
