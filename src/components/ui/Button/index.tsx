import React, { ButtonHTMLAttributes, FC } from 'react';
import Spiner from '../Spiner';
import ButtonStyled from './button.styled';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
  variant?: 'outlined' | 'only-icon'
  color?: 'primary' | 'secondary' | 'accent' | 'light' | 'dark'
  children: React.ReactNode
}

const Button: FC<ButtonProps> = ({
  children,
  isLoading,
  variant,
  color,
  ...props
}) => {
  return (
    <ButtonStyled.Wrapper
      variant={variant}
      color={color}
      disabled={isLoading}
      {...props}
    >
      {isLoading && (
        <>
          <Spiner sm />
          <span className='ps-2'>Cargando...</span>
        </>
      )}

      {!isLoading && children}
    </ButtonStyled.Wrapper>
  );
};

export default Button;
