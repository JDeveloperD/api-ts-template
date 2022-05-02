import { Badge, Button, Logo } from '@components/ui';
import useToggle from '@hooks/useToggle';
import { Col, Container, Row } from 'react-bootstrap';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import NavBar from '../NavBar';
import HeaderAccount from './HeaderAccount';
import HeaderStyled from './header.styled';
import { useContext, useState } from 'react';
import { UserCtx } from '@contexts/UserCtx';
import { MiniCart } from '../Cart';

const Header = () => {
  const { cart } = useContext(UserCtx);
  const [openNav, toggleNav] = useToggle();
  const [openMiniCart, setOpenMiniCart] = useState(false);

  const onClickHandler = () => setOpenMiniCart(!openMiniCart);

  return (
    <>
      <HeaderStyled.Wrapper>
        <Container fluid="xxl">
          <Row className='align-items-center'>
            <Col xs={6} lg={9} xl={8} className="d-flex align-items-center gap-3" >
              <Button
                variant='only-icon'
                className='ms-2 d-lg-none p-0 bg-transparent'
                onClick={toggleNav}
              >
                <FaBars />
              </Button>
              <Logo />
              <NavBar openNav={openNav} handleClose={toggleNav} />
            </Col>
            <Col xs={6} lg={3} xl={4} className='text-end'>
              <Button variant='only-icon'>
                <FiSearch />
              </Button>
              {/**
             * ----------------------
             * Cart
             * ----------------------
             */}
              <Button
                className='ms-2'
                variant='only-icon'
                onClick={onClickHandler}
              >
                <AiOutlineShoppingCart />
                <Badge
                  position='top-right'
                  color='primary'
                  shape='rounded'
                >{cart?.length}</Badge>
              </Button>
              <HeaderAccount />
            </Col>
          </Row>
        </Container>
        {openMiniCart && (
          <MiniCart />
        )}
      </HeaderStyled.Wrapper>
    </>
  );
};

export default Header;
