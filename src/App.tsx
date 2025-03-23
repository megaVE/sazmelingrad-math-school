import styles from './App.module.css';

import { Button } from '@/components/Button/Button';
import { Input } from '@/components/Input/Input';
import { Footer } from '@/components/layout/Footer/Footer';
import { Header } from '@/components/layout/Header/Header';
import { LilithSpeech } from '@/components/layout/LilithSpeech/LilithSpeech';

const firstMessage = [
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus iure animi dolor corrupti, doloribus, quae, quas autem enim voluptatibus neque dolorum quam aspernatur. Sunt dicta veniam distinctio, praesentium molestiae quae.',
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, corrupti fuga? Enim, molestiae, amet temporibus explicabo deserunt iusto, corrupti ab dignissimos illo neque debitis ex quos. Non excepturi hic impedit.',
];

export function App() {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <p>
                    Seja bem-vindo(a), estudante, à
                    <span className="highlight">
                        {' '}
                        Escola Nacional de Matemática de Sazmelingrad
                    </span>
                    . Em nossa plataforma virtual, você será guiado diretamente
                    por nossa instrutora especializada
                    <span className="highlight"> Guia Vermelha</span>, que vai
                    interagir e coordenar você por todo este processo.
                </p>
                <br />
                <p>
                    Para começarmos, vamos precisar de algumas informações
                    básicas suas para fazermos seu{' '}
                    <span className="highlight">Registro Escolar</span>:
                </p>
                <form>
                    <Input label="Seu Nome" id="name" required />
                    <Input
                        type="number"
                        label="Sua Idade (Anos)"
                        id="age"
                        required
                    />
                    <Button type="submit">Confirmar</Button>
                </form>
                <LilithSpeech message={firstMessage} />
            </div>
            <Footer />
        </>
    );
}
