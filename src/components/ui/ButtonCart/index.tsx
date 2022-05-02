import { Button, Spiner } from '@components/ui';
import { FC } from 'react';
import { MdAddShoppingCart, MdOutlineRemoveShoppingCart } from 'react-icons/md';

type ButtonCartProps = {
  isItemInCart: boolean
  addToCartFunction: () => void
  removeToCartFunction: () => void
}

const ButtonCart: FC<ButtonCartProps> = ({
  isItemInCart,
  addToCartFunction,
  removeToCartFunction
}) => {
  return (
    <Button
      color={isItemInCart ? 'secondary' : 'primary'}
      variant={!isItemInCart ? 'outlined' : undefined}
      className='me-2'
      isLoading={false}
      componentLoading={<Spiner sm />}
      onClick={!isItemInCart ? addToCartFunction : removeToCartFunction}
    >
      {isItemInCart ? <MdOutlineRemoveShoppingCart /> : <MdAddShoppingCart />}

    </Button>
  );
};

export default ButtonCart;
