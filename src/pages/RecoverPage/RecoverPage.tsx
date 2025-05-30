import type { DialogNode } from '@/@types/Dialog';
import { Title } from '@/components/Title';
import { DialogRenderer } from '@/components/templates/Dialog/Dialog';
import type { DifficultyType } from '@/constants/maps/Difficulty';
import { useProfileContext } from '@/contexts/ProfileContext';
import { questionAmounts } from '@/db/questions';
import { useNavigate } from 'react-router-dom';

export function RecoverPage() {
    const { profile } = useProfileContext();
    const navigate = useNavigate();

    function checkProfileAttributes() {
        if (!profile.name || !profile.age) {
            return 'noDataDialog';
        }

        if (!profile.knowledgeLevel) {
            return 'noKnowledgeLevelDialog';
        }

        if (!profile.isReady) {
            return 'notReadyDialog';
        }

        if (
            profile.answeredQuestions &&
            profile.answeredQuestions.length <
                questionAmounts[profile.knowledgeLevel as DifficultyType]
        ) {
            return 'pendingQuestionsDialog';
        }

        return 'alreadyFinishedDialog';
    }

    const initialDialog: DialogNode = {
        message: [
            'Olá! Se você caiu aqui, provavelmente quer dizer que você tentou ir pra algum lugar que não devia ou fazer algo que não te permitiram.',

            'O certo seria te punir por esse tipo de comportamento, mas infelizmente nem a lei nem minha programação me permitem fazer esse tipo de coisa...',

            'Enfim, vamos começar analisando seus dados pessoais que ainda tenho registro por aqui:',
        ],
        nextNodeKey: checkProfileAttributes(),
    };

    const noDataDialog: DialogNode = {
        message: [
            'Ok, eu nem sei o seu nome direito pra começo de conversa. Isso... sinceramente não vai nos levar a lugar nenhum e eu vou precisar te mandar pra nossa <b>Página Inicial</b> pra que você faça seu cadastro outra vez.',

            '',
        ],
        onFinish: () => navigate('/'),
    };

    const noKnowledgeLevelDialog: DialogNode = {
        message: [
            `Eu já sei que seu nome é ${profile.name} e você tem ${profile.age} anos, mas parece que eu ainda não te perguntei a respeito das suas habilidades matemáticas.`,

            'Tenho algumas breves perguntinhas que vão nos ajudar a te tratar melhor nos testes, então vou te mandar pra <b>Página de Introdução</b> para que você possa me contar melhor sobre sua <b>experiência com matemática</b> ou sobre a <b>falta dela</b>.',

            '',
        ],
        onFinish: () => navigate('/introduction'),
    };

    const notReadyDialog: DialogNode = {
        message: [''],
        onFinish: () => navigate('/tutorial'),
    };

    const pendingQuestionsDialog: DialogNode = {
        message: [''],
        onFinish: () => navigate(''),
    };

    const alreadyFinishedDialog: DialogNode = {
        message: [''],
        onFinish: () => navigate(''),
    };

    const dialogsRecord = {
        initialDialog,
        noDataDialog,
        noKnowledgeLevelDialog,
        notReadyDialog,
        pendingQuestionsDialog,
        alreadyFinishedDialog,
    };

    return (
        <>
            <Title>Recuperação de Progress</Title>
            <DialogRenderer
                dialogsRecord={dialogsRecord}
                startDialogKey="initialDialog"
            />
        </>
    );
}
