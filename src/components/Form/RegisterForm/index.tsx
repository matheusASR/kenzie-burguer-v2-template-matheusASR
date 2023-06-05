import Input from '../Input';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TRegisterFormValues, registerFormSchema } from './registerFormSchema';
import { api } from '../../../services/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterFormValues>({
    resolver: zodResolver(registerFormSchema),
  });

  const submitFormRegister: SubmitHandler<TRegisterFormValues> = async (
    formData
  ) => {
    try {
      const response = await api.post('/users', formData);
      if (response.statusText === 'Created') {
        toast.success('Usuário cadastrado com sucesso');
        setTimeout(() => {
          navigate('/');
        }, 2000);
      }
    } catch (error: any) {
      toast.error(error.response.data);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(submitFormRegister)}>
      <Input
        id='name'
        type='text'
        register={register('name')}
        error={errors.name}
      />
      <Input
        id='email'
        type='email'
        register={register('email')}
        error={errors.email}
      />
      <Input
        id='password'
        type='password'
        register={register('password')}
        error={errors.password}
      />
      <Input
        id='confirmPassword'
        type='password'
        register={register('confirmPassword')}
        error={errors.confirmPassword}
      />
      <StyledButton $buttonSize='default' $buttonStyle='gray'>
        Cadastrar
      </StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;
