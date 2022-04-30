import { css } from 'styled-components';

export const zerosIndex = ({ zIndex, position }: { zIndex: number, position: 'fixed' | 'absolute' }) => css`
  position: ${position};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${zIndex};
`;
