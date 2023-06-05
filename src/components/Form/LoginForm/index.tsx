import { useForm, SubmitHandler } from 'react-hook-form';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import Input from '../Input';
import { api } from '../../../services/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { zodResolver } from '@hookform/resolvers/zod';
import { TLoginFormValues, loginFormSchema } from './loginFormSchema';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginFormValues>({
    resolver: zodResolver(loginFormSchema),
  });

  const submitFormLogin: SubmitHandler<TLoginFormValues> = async (
    formData
  ) => {
    try {
      const response = await api.post('/login', formData)
      if (response.statusText === 'OK') {
        toast.success('Usuário logado com sucesso');
        localStorage.setItem('@kenzieHamburgueria:TOKEN', response.data.accessToken)
        setTimeout(() => {
          navigate('/shop')
        }, 2000)
      }
    } catch (error: any) {
      toast.error(error.response.data)
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(submitFormLogin)}>
      <Input type="email" id='login' register={register('email')} error={errors.email} />
      <Input type="password" id='senha' register={register('password')} error={errors.password} />
      <StyledButton $buttonSize='default' $buttonStyle='green'>
        Entrar
      </StyledButton>
    </StyledForm>
  );
};

export default LoginForm;
