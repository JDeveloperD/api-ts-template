import { GRAY_SCALE } from '@styles';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: ${GRAY_SCALE[1000]};
  width: 100%;
  border-radius: 1rem;
  overflow: hidden;
`;

const Image = styled.figure`
  width: 100%;
  max-width: 330px;
  height: 100%;
  position: relative;
  margin-left: auto;
`;

export default {
  Wrapper,
  Image
};
