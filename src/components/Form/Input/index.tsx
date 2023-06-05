import { StyledInputContainer } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';
import { FieldError } from 'react-hook-form';
import { UseFormRegisterReturn } from 'react-hook-form/dist/types';

interface IInputProps {
  id: 'name' | 'email' | 'password' | 'confirmPassword' | 'login' | 'senha';
  register: UseFormRegisterReturn<string>;
  error?: FieldError;
  type: 'text' | 'email' | 'password';
}

const Input = ({ id, register, error, type }: IInputProps) => (
  <>
    <StyledInputContainer>
      <input type={type} id={id} {...register} />
      <label htmlFor={id}>{id}</label>
    </StyledInputContainer>
    <StyledParagraph fontColor='red'>{error?.message}</StyledParagraph>
  </>
);

export default Input;
