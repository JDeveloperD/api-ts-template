import { RESET_BUTTON } from '@styles';
import { rgba } from 'polished';
import styled, { css } from 'styled-components';

const Wrapper = styled.button<{position?: 'center', zIndex?: number}>`
  ${RESET_BUTTON}
  background: ${({ theme }) => rgba(theme.colors.primary, 0.6)};
  color: white;
  padding: 1rem;
  border-radius: 50%;


  ${({ theme, position, zIndex }) => {
    switch (position) {
      case 'center':
        return css`
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: ${zIndex};
        `;
      default:
        return css``;
    }
  }}

`;

export default {
  Wrapper
};
