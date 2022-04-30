import { RESET_UL, MEDIA_BREAKPOINTS, COLORS, GRADIENTS_COLORS } from '@styles';
import styled, { css } from 'styled-components';

const Wrapper = styled.ul`
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
  padding: 2rem;
  &:nth-child(1) {
    background: ${({ theme }) => theme.colors.secondary};
  }

  &:nth-child(2) {
    background: ${GRADIENTS_COLORS.yellow1};
  }

  &:nth-child(3) {
    background: ${GRADIENTS_COLORS.blue1};
  }
`;

export default {
  Wrapper,
  Item
};
