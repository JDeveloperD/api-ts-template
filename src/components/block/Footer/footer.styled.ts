import { GRAY_SCALE } from '@styles';
import { rgba } from 'polished';
import styled from 'styled-components';

const Wrapper = styled.footer`
  background: ${GRAY_SCALE[1000]};
  padding-top: 4rem;
  position: absolute;
  inset-inline-end: 0;
  inset-inline-start: 0;
`;

const Copy = styled.div`
  padding: 1rem;
  margin-top: 4rem;
  border-top: 1px solid ${rgba(GRAY_SCALE[900], 0.3)};
`;

export default {
  Wrapper,
  Copy
};
