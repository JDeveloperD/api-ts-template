import FormEmailStyled from './formemail.styled';
import { FiSend } from 'react-icons/fi';
import { Small } from '@components/typography';

const FormEmail = ({ ...props }) => {
  const error = false;
  return (
    <form>
      <FormEmailStyled.Wrapper error={error}>
        <FormEmailStyled.Input
          type="email"
          {...props}
        />
        <FormEmailStyled.Button>
          <FiSend />
        </FormEmailStyled.Button>
      </FormEmailStyled.Wrapper>
      {error && (
        <FormEmailStyled.Message color='danger'>
          <Small>
            Error completa el correo
          </Small>
        </FormEmailStyled.Message>
      )}
    </form>
  );
};

export default FormEmail;
