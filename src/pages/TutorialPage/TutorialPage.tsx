import type { DialogNode } from '@/@types/Dialog';
import { Title } from '@/components/Title';
import { DialogRenderer } from '@/components/templates/Dialog/Dialog';
import { useProfileContext } from '@/contexts/ProfileContext';
import { useNavigate } from 'react-router-dom';

export function TutorialPage() {
    const { profile, setProfile } = useProfileContext();
    const navigate = useNavigate();

    const knowledgeLevel = profile.knowledgeLevel;

    function greetingByKnowledgeLevel() {
        if (knowledgeLevel === 'easy')
            return 'Vamos lá. Eu vou pegar leve com você já que matemática claramente não é o seu forte...';

        if (knowledgeLevel === 'medium')
            return 'Sinceramente... não tenho muita coisa pra dizer por agora. Bem, pelo lado bom, você não é exatamente dos piores alunos que eu vi passar por aqui...';

        if (knowledgeLevel === 'hard')
            return 'Apesar de não ser o melhor dos melhores que já vi por aqui, consigo ver muito potencial em você e tenho certeza que vamos conseguir desenvolver boa parte dele por aqui...';

        if (knowledgeLevel === 'very_hard')
            return 'Bem, chega de enrolações, você claramente não tá aqui pra brincadeira, não é?';

        return '...';
    }

    const errorDialog: DialogNode = {
        message: [
            '...',

            'Ai ai... Esses malditos alunos que adoram burlar as regras do sistema...',

            'Você deve estar se achando a pessoa mais inteligente do mundo por chegar até onde não devia, não é?',

            'Vamos, eu não to com paciência pra te dar um discurso ou uma mensagem bonita. Só volte pra bendita da <b>Página Inicial</b> e faça seu cadastro como uma pessoa decente deveria fazer.',

            '',
        ],
        onFinish: () => navigate('/'),
    };

    const initialDialog: DialogNode = {
        message: [
            greetingByKnowledgeLevel(),
            'De toda forma, você gostaria de passar pelo tutorial para ver melhor como as questões funcionarão?',
        ],
        options: [
            {
                label: 'Não',
                value: 'startDialog',
                theme: 'yellow',
            },
            {
                label: 'Sim',
                value: 'tutorialDialog',
                theme: 'green',
            },
        ],
    };

    const tutorialDialog: DialogNode = {
        message: [
            'Em frente. Vou te apresentar uma questão de exemplo, que já deve ser suficiente.',

            'Bom, toda questão possui basicamente esta estrutura: <b>Numeração, Dificuldade, Enunciado, Alternativas e Dicas</b>.',

            'Nem toda questão, contudo, possui <b>Alternativas</b> e <b>Dicas</b>. Em algumas questões eu não vou ter permissão de te ajudar e outras a resposta será aberta para que você digite por conta própria.',

            'Ah, e é claro que minhas dicas <b>não são de graça</b>... Uma questão que você precisar de ajuda minha para acertar não vai valer o mesmo tanto de uma questão que você acertar por conta própria.',

            'Por mais que você sempre possa buscar ajuda no <b>Google</b> e no <b>ChatGPT</b>, mas claro, que tipo de <b>pirralho desenroso trapaceiro</b> você seria se fizesse esse tipo de baixaria?',

            'Ah, me desculpe o palavreado, acho que... me exaltei um pouco. Mas... você entendeu a ideia...',

            'Claro que você, principalmente no caso das questões abertas, poderia se dar o luxo de chutar uma questão quando não soubesse exatamente a resposta dela, mas... vamos deixar as coisas um pouco mais interessantes...',

            'Em um cenário padrão, seria mais vantajoso chutar uma questão do que clicar no botão <b>DESISTIR</b> abaixo, afinal, quem é o idiota que desperdiçaria 20% de chance de ganhar alguns pontinhos a mais de graça?',

            'Mas... se você der uma resposta errada pra uma questão, eu vou descontar um pouquinho da sua pontuação. Sim, questões mais difíceis terão um desconto menor do que questões mais fáceis, mas você não terá desconto nenhum se simplesmente optar por <b>desistir</b> e não carregar a vergonha de uma <b>pontuação negativa</b> pela frente.',

            '',
        ],
    };

    const startDialog: DialogNode = {
        message: [
            'Ah... uma pessoa bem confiante de si temos aqui...',

            'Isso, ou você simplesmente já passou pela introdução antes. Minha progração infelizmente é limitada demais para me permitir deduzir isso por conta própria...',

            'Sem mais enrolações. Vamos começar!',

            '',
        ],
        onFinish: () => {
            setProfile({ isReady: true });
            navigate('/question/1');
        },
    };

    const dialogsRecord = {
        errorDialog,
        initialDialog,
        tutorialDialog,
        startDialog,
    };

    const startDialogKey: keyof typeof dialogsRecord = knowledgeLevel
        ? 'initialDialog'
        : 'errorDialog';

    return (
        <>
            <Title>Tutorial</Title>
            <DialogRenderer
                startDialogKey={startDialogKey}
                dialogsRecord={dialogsRecord}
            />
        </>
    );
}
