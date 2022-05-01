import { RESET_UL, MEDIA_BREAKPOINTS, GRADIENTS_COLORS } from '@styles';
import styled, { css } from 'styled-components';

interface GridStyledProps {
  columns: 2 | 3 | 4
}

const Wrapper = styled.ul<GridStyledProps>`
  ${RESET_UL}
  display: grid;
  gap: 1rem;

  ${MEDIA_BREAKPOINTS.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${({ columns }) => columns && css`

    ${MEDIA_BREAKPOINTS.laptop} {
      grid-template-columns: repeat(${columns}, 1fr);
    }
  `}
`;

const Item = styled.li`
  display: block;
`;

export default {
  Wrapper,
  Item
};
