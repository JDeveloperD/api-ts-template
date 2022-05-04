import styled from 'styled-components';
import { rgba } from 'polished';
import { zerosIndex, Z_INDEXS, GRAY_SCALE, FLEX_CENTER, RESET_BUTTON } from '@styles';

const Wrapper = styled.div`
  ${FLEX_CENTER}
  flex-direction: column;
  ${zerosIndex({ zIndex: Z_INDEXS.modal.overlay, position: 'fixed' })}
  background: ${rgba(GRAY_SCALE[1000], 0.6)};
  backdrop-filter: blur(2px);
`;

const Content = styled.div`
  background: white;
  width: 90%;
  max-width: 800px;
  border-radius: 0.5rem;
  position: relative;
`;

const Close = styled.button`
  ${RESET_BUTTON}
  color: white;
  font-weight: 600;
  font-size: 14px;
  position: absolute;
  bottom: 100%;
  right: 0;
`;

export default {
  Wrapper,
  Content,
  Close
};
