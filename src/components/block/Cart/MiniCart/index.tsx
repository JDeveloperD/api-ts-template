import { HeadLine, Paragraph, Small } from '@components/typography';
import { Button } from '@components/ui';
import { UserCtx } from '@contexts/UserCtx';
import { useContext } from 'react';
import CartItem from '../CartItem';
import CartStyled from './minicart.styled';

const MiniCart = () => {
  const { cart, totalCart } = useContext(UserCtx);
  return (
    <CartStyled.Wrapper>
      <HeadLine size={4}>Tu carrito de compras</HeadLine>
      <Paragraph color='gray'>Tienes {cart?.length} curso en tu carrito</Paragraph>
      <Small>
        Total: <HeadLine as="b" size={6} color="primary">${totalCart} </HeadLine>
      </Small>
      <CartStyled.List>
        {cart?.map(course => (
          <li key={course.id}>
            <CartItem {...course} />
          </li>
        ))}
      </CartStyled.List>
      <CartStyled.Foot>
        <Button className='w-100' color='primary' variant='outlined'>Ir a mi carrito</Button>
        <Button className='w-100' color='primary'>Comprar ahora</Button>
      </CartStyled.Foot>
    </CartStyled.Wrapper>
  );
};

export default MiniCart;
