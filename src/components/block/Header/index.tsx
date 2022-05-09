import { Badge, Button, Logo } from '@components/ui';
import useToggle from '@hooks/useToggle';
import { Col, Container, Row } from 'react-bootstrap';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { GoThreeBars } from 'react-icons/go';
import { FiSearch } from 'react-icons/fi';
import NavBar from '../NavBar';
import HeaderAccount from './HeaderAccount';
import HeaderStyled from './header.styled';
import { useContext } from 'react';
import { UserCtx } from '@contexts/UserCtx';
import { MiniCart } from '../Cart';
import { useRouter } from 'next/router';

const Header = () => {
  const { pathname } = useRouter();
  const { cart } = useContext(UserCtx);
  const [openNav, toggleNav] = useToggle();
  const [openMiniCart, toggleOpenMiniCart] = useToggle();

  const isLight = pathname === '/';

  // const onClickHandler = () => setOpenMiniCart(!openMiniCart);

  return (
    <>
      <HeaderStyled.Wrapper>
        <Container fluid="xxl">
          <Row className='align-items-center'>
            <Col xs={6} lg={8} xl={8} className="d-flex align-items-center gap-3" >
              <Button
                color={isLight && 'light'}
                variant='icon'
                className='ms-2 d-lg-none p-0 bg-transparent'
                onClick={toggleNav}
              >
                <GoThreeBars />
              </Button>
              <Logo />
              <NavBar
                openNav={openNav}
                handleClose={toggleNav}
                light={isLight}
              />
            </Col>
            <Col xs={6} lg={4} xl={4}>
              <div className="d-flex justify-content-end align-items-center">
                <Button
                  color={isLight && 'light'}
                  variant='icon'>
                  <FiSearch />
                </Button>
                {/**
               * ----------------------
               * Cart
               * ----------------------
               */}
                <Button
                  color={isLight ? 'light' : null}
                  className='ms-2'
                  variant='icon'
                  onClick={toggleOpenMiniCart}
                >
                  <AiOutlineShoppingCart />
                  <Badge
                    position='top-right'
                    color='primary'
                    shape='rounded'
                  >{cart?.length}</Badge>
                </Button>
                <HeaderAccount light={isLight} />
              </div>
            </Col>
          </Row>
        </Container>
        {/* {openMiniCart && ( */}
          <MiniCart active={openMiniCart} closeFunction={toggleOpenMiniCart} />
         {/* )} */}
      </HeaderStyled.Wrapper>
    </>
  );
};

export default Header;
