import { FC, useContext } from 'react';
import { Course } from '@api/resources';
import { Button } from '@components/ui';
import { GrTrash } from 'react-icons/gr';
import { HeadLine, Small } from '@components/typography';
import Image from 'next/image';
import CartItemStyled from './cartItem.styled';
import { UserCtx } from '@contexts/UserCtx';

type CartItemProps = Omit<Course, 'level'>

const CartItem: FC<CartItemProps> = ({
  id,
  name,
  price,
  instructor,
  discount,
  video
}) => {
  const { removeCourseToCart } = useContext(UserCtx);
  return (
    <CartItemStyled.Wrapper>
      <CartItemStyled.Figure>
        <Image
          src={video.thumb}
          layout="fill"
          objectFit='cover'
        />
      </CartItemStyled.Figure>
      <CartItemStyled.Info>
        <HeadLine size={6} className="mb-0">{name}</HeadLine>
        <Small color="gray">{instructor.name}</Small>

        <div className='d-flex gap-2'>
          {discount && (
            <>
              <HeadLine color='danger' size={6} className="mb-0">
                {discount.currencySimbol} {discount.amount}
              </HeadLine>
              <Small color='gray' as="del">
                {price.currencySimbol}{price.amount}
              </Small>
            </>
          )}

          {!discount && (
            <HeadLine size={6}>
              {price.currencySimbol}{price.amount}
            </HeadLine>
          )}
        </div>
      </CartItemStyled.Info>
      <Button
        variant="only-icon"
        onClick={() => removeCourseToCart(id)}
      >
        <GrTrash />
      </Button>
    </CartItemStyled.Wrapper>
  );
};

export default CartItem;
