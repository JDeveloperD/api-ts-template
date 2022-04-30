import { Button } from '@components/ui';
import { AiOutlineUser } from 'react-icons/ai';

const HeaderAccount = ({ ...props }) => {
  return (
    <>
      <Button
        variant='only-icon'
        className='d-xl-none ms-2'>
        <AiOutlineUser />
      </Button>
      <Button
        variant="outlined"
        className='d-none d-xl-inline-block ms-2'
        color="primary">
        Iniciar sesión
      </Button>
      <Button
        className='d-none d-xl-inline-block ms-2'
        color="secondary">
        Registrarte
      </Button>
    </>
  );
};

export default HeaderAccount;
