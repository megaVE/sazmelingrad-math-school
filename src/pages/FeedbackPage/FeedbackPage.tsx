// import styles from './FeedbackPage.module.css';

import type { DialogNode } from '@/@types/Dialog';
import { DialogRenderer } from '@/components/templates/Dialog/Dialog';
import {
    type AnsweredQuestionType,
    useProfileContext,
} from '@/contexts/ProfileContext';
import { toCammelCase, toPascalCase } from '@/utils/parser';
import { useNavigate, useParams } from 'react-router-dom';

export function FeedbackPage() {
    const navigate = useNavigate();

    const { id } = useParams();

    const { profile } = useProfileContext();

    const { difficulty, feedback } = profile.answeredQuestions?.at(
        -1,
    ) as AnsweredQuestionType;

    const easyHitDialog: DialogNode = {
        message: [
            'Ah, veja só: uma criatura com o mínimo de <b>capacidade cognitiva funcional</b>. Elas são mais raras neste <b>Reino</b> do que eu gostaria de admitir...',

            'Admito que tive um pouco de medo que errasse isso. Acho que conseguiu me surpreender, moderadamente...',

            'Mas enfim, eu não recomendaria se empolgar ou <b>comemorar</b> demais. Isso foi o <b>equivalente acadêmico</b> a preencher o <b>nome</b> corretamente em uma prova. Vamos ver se sabe fazer algo mais elaborado do que simplesmente... existir.',

            'Próxima questão. Tente manter essa maré de acertos antes que ela evapore como sua capacidade de concentração.',

            '',
        ],
        nextNodeKey: 'endingDialog',
    };

    const easyMissDialog: DialogNode = {
        message: [
            '<b>AHAHAHAHAHAHAHAHAHAHA!</b>',

            '...A-Ah, me desculpe... Acho que perdi um pouco minha postura e o profissionalismo...',

            'Era daquelas questões que até um macaquinho bem treinado conseguiria resolver contando bananas.',

            'Me diga, você leu <b>mesmo</b> o enunciado ou simplesmente clicou no primeiro botão que brilhou?',

            'Mas paciência... A esperança é a última que morre, não é?.',

            '<i>( Embora neste caso ela esteja visivelmente agonizando )</i>',

            'Vamos fazer o seguinte: respire fundo, leia de novo e, na <b>próxima questão</b>, tente usar mais o cérebro e menos a ansiedade...',

            '',
        ],
        nextNodeKey: 'endingDialog',
    };

    const easySkippedDialog: DialogNode = {
        message: [
            'Você... pulou?',

            'Não sei se fico indignada ou apenas com pena...',

            'Essa questão era de dificuldade <b>Fácil</b>... Tipo, <b>"nível criança entediada no recreio"</b>.',

            'Você teve medo de errar, não é? Ou talvez apenas preguiça... Enfim, não é como se mudasse muita coisa...',

            'Mas enfim, <b>insegurança</b> é um problema até que comum... Ainda há tempo de reformar essa alma frágil. Avancemos...',

            '',
        ],
        nextNodeKey: 'endingDialog',
    };

    const mediumHitDialog: DialogNode = {
        message: [
            'Ah, ótimo: você acertou.',

            'É uma questão que, em teoria, o <b>aluno mais fraco de Ensino Médio</b> deveria ser capaz de resolver; mas eu sei que na prática as coisas não funcionam bem assim...',

            '<i>( Ai ai... às vezes eu me pergunto se o povo realmente tem motivo a ser <b>Nacionalista</b> em um país desses... )</i>',

            'Enfim, só tome cuidado: acertos assim costumam iludir mentes frágeis a pensarem que são gênios.',

            'Continue assim e, quem sabe, você suba mais um degrau na cadeia evolutiva.',

            'Próxima questão. Veremos se isso foi acaso ou competência...',

            '',
        ],
        nextNodeKey: 'endingDialog',
    };

    const mediumMissDialog: DialogNode = {
        message: [
            'E errou...',

            'Isso exigia apenas o mínimo de atenção e raciocínio, mas eu sei que isso é pedir demais para <b>algumas pessoas</b>...',

            'Fico me perguntando se você realmente tentou ou se foi um chute sem rumo...',

            'Se quiser continuar neste curso, eu recomendaria pelo menos <b>tentar pensar</b> igual seres humanos comuns deveriam fazer. Sim, eu sei que é difícil, mas não deve ser impossível; nem mesmo para alguém como você...',

            '<b>Respire</b>, <b>aceite seu fracasso momentâneo</b> e <b>prepare-se para errar outra vez</b>.',

            'Ou, com um pouco de <b>dedicação</b> e <b>sorte</b>, melhorar. Talvez você me dê um motivo para não ser tão <b>pessimista</b> assim o tempo todo...',

            '',
        ],
        nextNodeKey: 'endingDialog',
    };

    const mediumSkippedDialog: DialogNode = {
        message: [
            'E pulou... Que espírito destemido o seu...',

            'Era uma pergunta normal, não uma <b>equação do século XVI</b> escondida em <b>manuscritos celtas</b>.',

            'Mas tudo bem. Fugir diante do perigo ainda costuma ser o instinto da maioria dos <b>seres vivos</b> deste mundo.',

            'Sugiro que pare de se esquivar antes que eu comece a te chamar de <b>Corredor de Sazmelingrado</b>.',

            'Vamos à próxima. Tenho esperança de que você pelo menos tente enfrentá-la.',

            '',
        ],
        nextNodeKey: 'endingDialog',
    };

    const hardHitDialog: DialogNode = {
        message: [
            'Olha só... Alguém resolveu se superar hoje...',

            'Acertar uma <b>questão difícil</b>? Que incrível...',

            'Não que eu vá sair distribuindo medalhas por aí, mas... há algo de <b>minimamente promissor</b> em você.',

            'Talvez você seja apenas um daqueles casos raros: <b>pouca conversa, muito cálculo</b>.',

            'Continue assim e, quem sabe, algum dia eu comece a te tratar como alguém <b>minimamente decente</b>...',

            '',
        ],
        nextNodeKey: 'endingDialog',
    };

    const hardMissDialog: DialogNode = {
        message: [
            'Bom, não era uma <b>questão fácil</b>... e você fez questão de confirmar isso.',

            'Eu até considerei torcer por você, mas... seria um <b>desperdício de recursos</b>.',

            'Errar aqui não é exatamente <b>vergonha</b>. Diria que está mais para um <b>leve embaraço</b>...',

            'Tente enxergar esta falha como um sinal de que ainda há muito a aprender. <i>( Talvez até demais... )</i>',

            'Vamos em frente. Errar uma <b>questão difícil</b> não é o fim do mundo. Embora, no seu caso, talvez atrase um pouco a <b>evolução da espécie</b>.',

            '',
        ],
        nextNodeKey: 'endingDialog',
    };

    const hardSkippedDialog: DialogNode = {
        message: [
            'Hm. Você pulou... Uma <b>escolha pragmática</b>. <b>Covarde</b>, mas <b>pragmática</b>...',

            'Essa era complicada, admito. Mas o que seria da glória sem o mínimo de risco?',

            'Preferiu fugir do que tentar. Interessante estratégia... digna de um <b>burocrata</b>.',

            'Claro, ainda temos as <b>Muito Difíceis</b> mais à frente. Espero que esteja apenas economizando energia para este tipo de desafio.',

            'Vamos à próxima. Ah, e desta vez: tente ter um pouco mais de... <b>audácia</b>...',

            '',
        ],
        nextNodeKey: 'endingDialog',
    };

    const veryHardHitDialog: DialogNode = {
        message: [
            '...Caramba!',

            'Isso realmente foi <b>surpreendente</b>. No bom sentido. E você sabe o quanto é raro eu usar essa palavra.',

            'Você acertou uma <b>questão muito difícil</b>. Sozinho. Sem choramingar.',

            'Se isso foi sorte, foi uma <b>sorte descomunal</b>. Se foi habilidade... então temos <b>algo interessante</b> em mãos.',

            'Mas,... não fique convencido ainda. Comece a considerar a possibilidade de que você talvez... só talvez... não seja um completo <b>desastre de aluno</b>.',

            'Enfim, continue. Acho que estou começando a me divertir...',

            '',
        ],
        nextNodeKey: 'endingDialog',
    };

    const veryHardMissDialog: DialogNode = {
        message: [
            'Ok... essa difícil. <b>Muito difícil</b>...',

            'Apesar disso, eu ainda senti um pouco de <b>decepção</b>. Talvez porque parte minha ainda tinha <b>esperança no seu potencial</b>...',

            'Enfim, talvez eu possa dizer que foi um erro digno: o tipo de tropeço que <b>grandes mentes</b> cometem no caminho para o <b>domínio completo</b>.',

            'Mas cuidado: errar esse tipo de questão pode ser normal, já <b>insistir na ignorância</b>... não deveria ser...',

            'Tente não se <b>frustrar demais</b>. Ainda há <b>tempo e oportunidade</b> para <b>evoluir</b>... ou pelo menos evitar chegar no <b>fundo do poço</b>.',

            'Próxima. E por favor: tente fazer jus à <b>complexidade do desafio</b>.',

            '',
        ],
        nextNodeKey: 'endingDialog',
    };

    const veryHardSkippedDialog: DialogNode = {
        message: [
            'A velha e confiável técnica de <b><i>"O que os olhos não veem, o coração não sente"</i></b>.',

            'Você pulou uma <b>questão muito difícil</b>. Talvez sensato... Talvez covarde...',

            'Prefere <b>preservar sua pontuação</b> do que <b>arriscar</b>? Tem sentido, por mais entediante que seja...',

            'Mas tudo bem. Nem todos foram <b>gerados</b> para os <b>grandes feitos</b>. Ainda precisamos de gente para assistir na plateia.',

            'Avance. Só não transforme essa fuga em <b>hábito</b>, já que você iria tirar completamente o propósito <b>deste curso</b>.',

            '',
        ],
        nextNodeKey: 'endingDialog',
    };

    const endingDialog: DialogNode = {
        message: [''],
        onFinish: () =>
            navigate(`/question/${Number.parseInt(id as string) + 1}`),
    };

    const dialogsRecord = {
        easyHitDialog,
        easyMissDialog,
        easySkippedDialog,
        mediumHitDialog,
        mediumMissDialog,
        mediumSkippedDialog,
        hardHitDialog,
        hardMissDialog,
        hardSkippedDialog,
        veryHardHitDialog,
        veryHardMissDialog,
        veryHardSkippedDialog,
        endingDialog,
    };

    const getFeedbackDialog = () =>
        `${toCammelCase(difficulty)}${toPascalCase(feedback)}Dialog`;

    return (
        <DialogRenderer
            dialogsRecord={dialogsRecord}
            startDialogKey={getFeedbackDialog()}
        />
    );
}
