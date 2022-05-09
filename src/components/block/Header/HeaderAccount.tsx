import { Button, LineDividerText, ProgressBar } from '@components/ui';
import { AiOutlineUser } from 'react-icons/ai';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import HeaderStyled from './header.styled';
import { HeadLine, Paragraph, Small } from '@components/typography';
import { FiBriefcase, FiGift, FiChevronDown } from 'react-icons/fi';
import { FaRegComments } from 'react-icons/fa';
import { VscSignOut } from 'react-icons/vsc';
import Link from 'next/link';
import { CardProgressCourse } from '../Cards';

const HeaderAccount = ({ light, ...props }) => {
  const router = useRouter();
  const { data: session, status } = useSession();

  console.log(session);

  if (status === 'loading') {
    return null;
  }

  return (
    <>
      {/* <Button
        variant='only-icon'
        className='d-xl-none ms-2'>
        <AiOutlineUser />
      </Button> */}
      {!session
        ? (<>
        <Button
          onClick={() => router.push('/auth/credentials-signin')}
          variant="outlined"
          className='d-none d-xl-inline-block ms-2'
          color={light ? 'light' : 'primary'}>
          Iniciar sesión
        </Button>
        <Button
          className='d-none d-xl-inline-block ms-2'
          variant='filled'
          color={light ? 'light' : 'secondary'}>
          Registrarte
        </Button>
         </>)
        : (
          <HeaderStyled.AccountDetails open={false}>
            <summary>
              <HeaderStyled.Avatar>
                <Image
                  src={session.user?.image ? session.user.image : '/img/default-avatar.jpg'}
                  width={25}
                  height={25}
                  quality={100}
                />
              </HeaderStyled.Avatar>
              <FiChevronDown />
            </summary>
            <HeaderStyled.Account>
              <header className='p-2'>
                <CardProgressCourse />
              </header>
              <main className='p-2'>
                <Button
                  bold
                  onClick={() => router.push('/cuenta')}
                  color='secondary'
                  className='ps-0'
                >
                  Ver todos mis cursos
                </Button>
                <LineDividerText color='textBody' className='mb-3' />
                <HeadLine color='light' size={6} className='mb-0'>Hola, {session.user?.name}!</HeadLine>
                <Paragraph color='gray'>Agroclub Basic</Paragraph>
                <Button
                  bold
                  onClick={() => router.push('/cuenta')}
                  color='secondary'
                  className='ps-0'
                >
                  Ver mi cuenta
                </Button>
                <LineDividerText className='mb-3' color='textBody' />
                <Paragraph color='gray'> <FiBriefcase /> <span className="ms-3">Empleos</span></Paragraph>
                <Paragraph color='gray'> <FiGift /> <span className="ms-3">Obten 1 mes gratis</span></Paragraph>
                <Paragraph color='gray'> <FiBriefcase /> <span className="ms-3">Mi suscripcion</span></Paragraph>
                <Paragraph color='gray'> <FaRegComments /> <span className="ms-3">Contacanos</span></Paragraph>
              </main>
              <footer className='mt-3'>
                <Button
                  bold
                  onClick={() => signOut()}
                  color='secondary'
                  className='ps-0'
                >
                  Cerrar sesion <VscSignOut />
                </Button>
              </footer>
            </HeaderStyled.Account>
          </HeaderStyled.AccountDetails>
          )}
    </>
  );
};

export default HeaderAccount;
