import { HeadLine } from '@components/typography';
import { Logo } from '@components/ui';
import Link from 'next/link';
import { FC, ReactNode } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { WrapperAuth } from './layouts.styled';

const AuthLayout:FC<{children: ReactNode}> = ({ children }) => {
  return (
    <WrapperAuth>
      <Container>
        <Row className='justify-content-center justify-content-lg-start py-4'>
          <Col sm={9} md={7} lg={6} xl={5}>
            <div className="d-flex align-items-center justify-content-between">
              <Logo />
              <div className='d-flex gap-5'>
                <Link href="/">
                  <a className='text-decoration-none'>
                    <HeadLine className='m-0' size={6} color='gray'>Home</HeadLine>
                  </a>
                </Link>
                <Link href="/">
                  <a className='text-decoration-none'>
                    <HeadLine className='m-0' size={6} color='gray'>Unirse</HeadLine>
                  </a>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
        <Row className='justify-content-center justify-content-lg-start'>
          <Col sm={9} md={7} lg={6} xl={5}>
            {children}
          </Col>
        </Row>
      </Container>
    </WrapperAuth>
  );
};

export default AuthLayout;
