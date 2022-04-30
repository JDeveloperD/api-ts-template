import React, { ButtonHTMLAttributes, FC } from 'react';
import ButtonStyled, { ButtonStyledPropsInterface } from './button.styled';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
  componentLoading?: React.ReactNode
  variant?: 'outlined' | 'only-icon'
  children: React.ReactNode
}

const Button: FC<ButtonProps & ButtonStyledPropsInterface> = ({
  children,
  isLoading,
  componentLoading,
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

      {isLoading ? componentLoading : children}

    </ButtonStyled.Wrapper>
  );
};

export default Button;
