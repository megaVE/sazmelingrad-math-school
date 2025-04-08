import type { DialogNode } from '@/@types/Dialog';
import { DialogRenderer } from '@/components/templates/Dialog/Dialog';
import { useProfileContext } from '@/contexts/ProfileContext';
import { useNavigate } from 'react-router-dom';

export function IntroductionPage() {
    const navigate = useNavigate();
    const { profile, setProfile } = useProfileContext();

    const firstDialog =
        !profile.name || !profile.age ? 'errorDialog' : 'introDialog';

    const errorDialog: DialogNode = {
        message: [
            'Olá, undefined!',

            'Não... espera... você pulou a parte de registro, não é, criatura safada?',

            'Não acredito que você realmente pensou mesmo que isso passaria batido por mim...',

            'Vá. Volte pra página inicial e termina seu cadastro. <b>Isso foi uma ordem...<b/>',
        ],
        onFinish: () => navigate('/'),
    };

    const introDialog: DialogNode = {
        message: [
            `Olá, ${profile.name}!`,

            'Meu nome é <b>Guia Vermelha</b>, como você já deve ter lido, mas pode me chamar de <b>Scarlilith</b>, para deixarmos as coisas mais simples...',

            'Primeiramente, eu gostaria de parabenizá-lo por sua entrada na <b>Escola de Matemática Nacional de Sazmelingrado</b>.',

            `É um feito impressionante, principalmente para uma humilde criatrinha de ${profile.age} anos como você...`,

            'Mas chega de enrolação. Você veio aqui pra aprender matemática, então vamos logo aos números, não é mesmo?',

            'Antes de começar, eu gostaria de saber um pouco mais sobre suas atuais capacidades com o campo das exatas...',

            'Me diga... Você ainda tem alguma dificuldade com operações básicas, como <b>somar(+), subtrair(-), multiplicar(&times;), dividir(&#xf7;), elevar(^) e radicalizar(&radic;)</b>? Sabe trabalhar com <b>frações, porcentagem, regra de 3, MMC e MDC</b>?',
        ],
        options: [
            {
                label: 'Não',
                value: 'easyStart',
            },
            {
                label: 'Sim',
                value: 'mediumDialog',
            },
        ],
    };

    const easyStart: DialogNode = {
        message: [
            'Ah, tudo bem. Eu entendo que sua cabecinha deve ser meio limitada, então vamos tentar te ajudar com isso.',
        ],
        onFinish: () => setProfile({ ...profile, knowledgeLevel: 'easy' }),
    };

    const mediumDialog: DialogNode = {
        message: [
            'Mas é claro que você sabe, não é? Que pergunta óbvia...',

            'Isso significa que <b>Perguntas Fáceis</b> não serão um grande desafio para você, mas vou fazer algumas de vez em quando, só pra garantir que você não mentiu...',

            'Dito isso. Vamos continuar nossa entrevista de introdução! Você se sente confortável resolvendo tópicos como <b>Equações de 1º e 2º Grau, Regra de 3, Razão e Proporção, Média, Mediana, Moda, Funções e Gráficos</b>?',
        ],
        options: [
            {
                label: 'Não',
                value: 'mediumStart',
            },
            {
                label: 'Sim',
                value: 'hardStart',
            },
        ],
    };
    const mediumStart: DialogNode = {
        message: [
            'Entendo. Vocês têm suas dificuldades e eu preciso ser paciente com isso. É por este motivo que eu fui criada, afinal...',
        ],
        onFinish: () => setProfile({ ...profile, knowledgeLevel: 'medium' }),
    };

    const hardDialog: DialogNode = {
        message: [
            'Impressionante. É um orgulho, ou uma pena que este fato já te coloque na frente de muitos outros cidadãos do nosso país maravilhoso.',

            'Você tem o conhecimento de um <b>Aluno de Ensino Médio</b>, ou pelo menos que um deles se esperaria ter...',

            `Agora... vamos separar a <b>Plebe</b> da <b>Verdadeira Aristocracia</b>. Me conte, <b>${profile.name}</b>, você é capaz de resolver e trabalhar com problemas de <b>Funções Exponenciais, Logaritmos, Análise Combinatória, Probabilidade, Matrizes, Geometria e Trigonometria</b>?`,
        ],
        options: [
            {
                label: 'Não',
                value: 'hardStart',
            },
            {
                label: 'Sim',
                value: 'veryHardDialog',
            },
        ],
    };

    const hardStart: DialogNode = {
        message: [
            'Tudo bem. Eu entendo que alguns desses tópicos podem parecer assustadores, principalmente quando é sua primeira vez, mas você pode revisar sua escolha mais tarde quando sentir-se mais habilitado a trabalhar com esses tópicos que mencionei.',
        ],
        onFinish: () => setProfile({ ...profile, knowledgeLevel: 'hard' }),
    };

    const veryHardDialog: DialogNode = {
        message: [
            'Uau... temos um <b>Mestre das Exatas</b> aqui, não é?',

            'Talentos assim são raros e você deveria se orgulhar disso. De forma humilde, é claro...',

            'Mas... uma dúvida. Já que você parece ser tão inteligente assim.',

            'Será que... por um acaso, você também conseguiria resolver questões que envolvem <b>Teoria de Limites, Funções Contínuas, Geometria Analítica, Sistemas Linears, Raízes Complexas, Transformações Geométricas e Otimização de Funções</b>?',
        ],
        options: [
            {
                label: 'Não',
                value: 'veryHardStart',
            },
            {
                label: 'Sim',
                value: 'ultimateDialog',
            },
        ],
    };

    const veryHardStart: DialogNode = {
        message: [
            'É claro, isso foi uma piada. O que você estaria fazendo aqui afinal se já estivesse nesse nível?',
        ],
        onFinish: () => setProfile({ ...profile, knowledgeLevel: 'very_hard' }),
    };

    const ultimateDialog: DialogNode = {
        message: [
            'O-O que?! Isso foi uma piada, não é?',

            `Hahahaha. Muito engraçado, ${profile.name}, você tem um senso de humor incrível...`,

            '...',

            '.....',

            '.......',

            'E-Espera, você <b>realmente</b> sabe esse tipo de coisa?!',

            'Minha Deusa,... eu sinceramente não sei o que dizer mais...',

            `Não, eu vou ser sincera: ${profile.name}, Moye Lyubimoye, você não deveria estar aqui. Esta página é uma <b>Escola de Matemática</b> e não uma <b>Academia Ciêntífica</b>`,

            'Você deveria parar de perder seu tempo com <b>problemas bobinhos</b> e ir logo de uma vez trabalhar pra <b>Aeronautica Espacial de Sazmelingrado</b>, e não, não estou sendo irônica, precisamos de muitos como você por lá.',
        ],
    };

    const dialogsRecord = {
        errorDialog,
        introDialog,
        easyStart,
        mediumDialog,
        mediumStart,
        hardDialog,
        hardStart,
        veryHardDialog,
        veryHardStart,
        ultimateDialog,
    };

    return (
        <>
            <DialogRenderer
                dialogsRecord={dialogsRecord}
                startDialogKey={firstDialog}
            />
        </>
    );
}
