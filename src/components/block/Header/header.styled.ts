import { MEDIA_BREAKPOINTS, Z_INDEXS } from '@styles';
import styled from 'styled-components';

const Wrapper = styled.header`
  padding: 1rem;
  position: relative;
  z-index: ${Z_INDEXS.header.sticky};

  ${MEDIA_BREAKPOINTS.tablet} {
    padding: 1.5rem 0;
  }
`;

export default {
  Wrapper
};
