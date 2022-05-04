import { FC, ReactNode } from 'react';
import ModalStyled from './modal.styled';

type ModalProps = {
  children: ReactNode
  closeFunction: Function
}

const Modal:FC<ModalProps> = ({ children, closeFunction }) => {
  return <ModalStyled.Wrapper>
    <ModalStyled.Content>
    <ModalStyled.Close onClick={closeFunction}>CERRAR &times;</ModalStyled.Close>
      {children}
    </ModalStyled.Content>
  </ModalStyled.Wrapper>;
};

export default Modal;
