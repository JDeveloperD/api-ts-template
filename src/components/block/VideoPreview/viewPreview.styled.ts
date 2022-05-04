import { GRAY_SCALE, MEDIA_BREAKPOINTS } from '@styles';
import styled from 'styled-components';

const Wrapper = styled.div``;

const Video = styled.div`
  width: 100%;
  height: 200px;
  background: ${GRAY_SCALE[300]};

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${MEDIA_BREAKPOINTS.tablet} {
    height: 300px;
  }

  ${MEDIA_BREAKPOINTS.laptop} {
    height: 400px;
  }
`;

export default {
  Video,
  Wrapper
};
