import type { DialogNode } from '@/@types/Dialog';
import { Title } from '@/components/Title';
import { DialogRenderer } from '@/components/templates/Dialog/Dialog';
import { QuestionRender } from '@/components/templates/Question/Question';
import { questions } from '@/db/questions';
import { useParams } from 'react-router-dom';

export function QuestionPage() {
    const { id } = useParams();

    const questionId = Number.parseInt(id as string);

    const inexistingDialog: DialogNode = {
        message: [],
    };

    const invalidDialog: DialogNode = {
        message: [
            'Opa, o que aconteceu? Você editou o endereço da página por acaso ou estava tentando entrar em algum lugar onde não devia da aplicação?',

            '',

            '',

            '',

            'Venha comigo...',
        ],
    };

    const initialDialog: DialogNode = {
        message: [`${id}ª Questão.`],
    };

    const dialogsRecord = {
        inexistingDialog,
        invalidDialog,
        initialDialog,
    };

    const startDialogKey = ((): keyof typeof dialogsRecord => {
        if (Number.isNaN(questionId)) return 'invalidDialog';

        if (questionId < 1 || questionId > questions.length)
            return 'inexistingDialog';

        return 'initialDialog';
    })();

    return (
        <>
            <Title>Questão {id}</Title>
            <QuestionRender question={questions[0]} />
            {false && (
                <DialogRenderer
                    dialogsRecord={dialogsRecord}
                    startDialogKey={startDialogKey}
                />
            )}
        </>
    );
}
