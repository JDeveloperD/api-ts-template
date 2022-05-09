import { GRAY_SCALE, RESET_BUTTON, RESET_UL, TRANSITIONS } from '@styles';
import styled, { css } from 'styled-components';
import { rgba } from 'polished';

const ButtonClose = styled.button`
  ${RESET_BUTTON}
  padding-right: 0;
  float: right;
  font-size: 1.75rem;
  line-height: 0.5;
  color: ${({ theme }) => theme.colors.textBody};
`;

const Foot = styled.footer`
  padding-top: 1rem;
  border-top: 1px solid ${GRAY_SCALE[200]};
  display: flex;
  gap: 1rem;
`;

const List = styled.ul`
  ${RESET_UL}
  padding: 1.5rem 1rem 1.5rem 0;
  margin-right: -2rem;
  height: calc(100vh - 250px); // 86 +64 0
  overflow-y: scroll;
`;

const Container = styled.div`
  width: 100%;
  max-width: 460px;
  min-height: 100vh;
  background: white;
  position: fixed;
  right: -100%;
  z-index: 2;
  padding: 2rem;
  transition: ${TRANSITIONS.base};
`;

const Overlay = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background: ${rgba(GRAY_SCALE[1000], 0.6)};
  backdrop-filter: blur(2px);
  transition: ${TRANSITIONS.base};
  opacity: 0;
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  visibility: hidden;

  ${({ active }) => active && css`
    visibility: visible;

    ${Container} {
      right: 0;
    }

    ${Overlay} {
      opacity: 1;
    }
  `}
`;

export default {
  Wrapper,
  List,
  Foot,
  ButtonClose,
  Overlay,
  Container
};
