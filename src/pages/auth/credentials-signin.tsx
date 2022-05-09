import { GetServerSideProps } from 'next';
import { getCsrfToken, getProviders, signIn } from 'next-auth/react';
import { HeadLine, Small } from '@components/typography';
import { Button, LineDividerText } from '@components/ui';
import { FormLogin } from '@components/block';
import Image from 'next/image';

export const getServerSideProps:GetServerSideProps<{}> = async (context) => {
  const providers = await getProviders();
  return {
    props: {
      csrfToken: await getCsrfToken(context),
      providers: Object.values(providers)
    }
  };
};

const SignIn = ({ csrfToken, providers }) => {
  const providerGithub = providers[1];
  const providerGoogle = providers[2];
  return (
    <>
      <HeadLine size={1} color='light' className='mb-4'>Iniciar sesion</HeadLine>
      <div className="d-flex gap-3">
        <Button
          variant='filled'
          color='light'
          roundedPill
          block
          className='mb-3'
          onClick={() => signIn(providerGithub.id)}
        >
          <Image
            src="/svg/brands/github.svg"
            width={16}
            height={16}
          />
          <Small>
            Inicia con {providerGithub.name}
          </Small>
        </Button>
        <Button
          variant='filled'
          color='light'
          roundedPill
          block
          className='mb-3'
          onClick={() => signIn(providerGoogle.id)}
        >
          <Image
            src="/svg/brands/google.svg"
            width={16}
            height={16}
          />
          <Small>
            Inicia con {providerGoogle.name}
          </Small>
        </Button>
      </div>
      <LineDividerText gap='1rem' color='gray' className='mt-4'>Iniciar con credenciales</LineDividerText>
      <FormLogin csrfToken={csrfToken} />
      <div className='mt-5'>
        <Small color='gray'>&copy; 2022. Todos los derechos reservados | Desarrollado por David Sandoval</Small>
      </div>
    </>
  );
};

SignIn.layout = 'auth';

export default SignIn;
