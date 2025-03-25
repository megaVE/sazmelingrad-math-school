import { Button } from '@/components/Button/Button';
import { Input } from '@/components/Input/Input';
import { Form } from '@/components/templates/Form/Form';
import { useProfileContext } from '@/contexts/ProfileContext';
import { useForm } from '@/hooks/useForm';
import { useObjectState } from '@/hooks/useObjectState';
import { Register, type RegisterType } from '@/schemas/Register';
import { useNavigate } from 'react-router-dom';

export function MainPage() {
    const navigate = useNavigate();
    const { setProfile } = useProfileContext();

    const [register, setRegisterProp] = useObjectState<RegisterType>({
        name: '',
        age: '',
    });

    function onRegister(data: RegisterType) {
        setProfile({
            age: Number.parseInt(data.age),
            name: data.name,
        });

        navigate('/introduction');
    }

    const { handleSubmit, errors } = useForm({
        values: register,
        validator: Register,
        onSubmit: onRegister,
    });

    return (
        <>
            <p>
                Seja bem-vindo(a), estudante, à
                <span className="highlight">
                    {' '}
                    Escola Nacional de Matemática de Sazmelingrad
                </span>
                . Em nossa plataforma virtual, você será guiado diretamente por
                nossa instrutora especializada
                <span className="highlight"> Guia Vermelha</span>, que vai
                interagir e coordenar você por todo este processo.
            </p>
            <br />
            <p>
                Para começarmos, vamos precisar de algumas informações básicas
                suas para fazermos seu{' '}
                <span className="highlight">Registro Escolar</span>:
            </p>
            <Form.Container
                formTitle="Registro de Aluno"
                onSubmit={handleSubmit}
            >
                <Form.Section>
                    <Input
                        label="Seu Nome"
                        id="name"
                        state={[register.name, setRegisterProp]}
                        required
                        error={errors.name}
                    />
                </Form.Section>
                <Form.Section>
                    <Input
                        type="number"
                        label="Sua Idade (Anos)"
                        state={[register.age, setRegisterProp]}
                        id="age"
                        required
                        error={errors.age}
                    />
                </Form.Section>
                <Button type="submit">Confirmar</Button>
            </Form.Container>
        </>
    );
}
