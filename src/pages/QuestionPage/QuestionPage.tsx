import type { DialogNode } from '@/@types/Dialog';
import { Title } from '@/components/Title';
import { DialogRenderer } from '@/components/templates/Dialog/Dialog';
import { QuestionRender } from '@/components/templates/Question/Question';
import { questions } from '@/db/questions';
import { useNavigate, useParams } from 'react-router-dom';

export function QuestionPage() {
    const { id: paramId } = useParams();

    const navigate = useNavigate();

    const id = Number.parseInt(paramId as string);

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

            '',
        ],
        onFinish: () => navigate('/'),
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
        if (Number.isNaN(id)) return 'invalidDialog';

        if (id < 1 || id > questions.length) return 'inexistingDialog';

        return 'initialDialog';
    })();

    return (
        <>
            <Title>Questão {id}</Title>
            <DialogRenderer
                dialogsRecord={dialogsRecord}
                startDialogKey={startDialogKey}
            />
            <QuestionRender question={questions[0]} onFinish={() => {}} />
        </>
    );
}
