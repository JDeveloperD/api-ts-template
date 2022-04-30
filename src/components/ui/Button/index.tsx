import React, { ButtonHTMLAttributes, FC } from 'react';
import ButtonStyled from './button.styled';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
  componentLoading?: React.ReactNode
  variant?: 'outlined' | 'only-icon'
  color?: 'primary' | 'secondary' | 'accent' | 'light' | 'dark'
  children: React.ReactNode
}

const Button: FC<ButtonProps> = ({
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
