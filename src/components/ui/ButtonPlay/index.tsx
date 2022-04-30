import { FC, ButtonHTMLAttributes } from 'react';
import { FiPlay } from 'react-icons/fi';
import ButtonPlayStyled from './buttonplay.styled';

interface ButtonPlayProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  position?: 'center'
}

const ButtonPlay: FC<ButtonPlayProps> = ({ position, ...props }) => {
  return (
    <ButtonPlayStyled.Wrapper position={position} {...props}>
      <FiPlay />
    </ButtonPlayStyled.Wrapper>
  );
};

export default ButtonPlay;
