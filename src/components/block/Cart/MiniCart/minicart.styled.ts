import { GRAY_SCALE, RESET_UL, SHADOWS } from '@styles';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  width: 100%;
  max-width: 460px;
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: ${SHADOWS.sm};
`;

const Foot = styled.footer`
  padding-top: 1rem;
  border-top: 1px solid ${GRAY_SCALE[200]};
  display: flex;
  gap: 1rem;
`;

const List = styled.ul`
  ${RESET_UL}
  padding: 1.5rem 0;
`;

export default {
  Wrapper,
  List,
  Foot
};
