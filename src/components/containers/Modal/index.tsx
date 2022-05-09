import { FC, MouseEvent, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import ModalStyled from './modal.styled';

type ModalProps = {
  children: ReactNode
  closeFunction: (ev: MouseEvent<HTMLButtonElement>) => void
}

const Modal:FC<ModalProps> = ({ children, closeFunction }) => {
  return createPortal(
    <ModalStyled.Wrapper>
      <ModalStyled.Content>
      <ModalStyled.Close onClick={closeFunction}>CERRAR &times;</ModalStyled.Close>
        {children}
      </ModalStyled.Content>
    </ModalStyled.Wrapper>,
    document.querySelector('#modal') as Element
  );
};

export default Modal;
