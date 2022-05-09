import { RESET_UL } from '@styles';
import styled, { css } from 'styled-components';

const Item = styled.li`
  cursor: pointer;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  width: 100%;
  padding: 0.5rem 0;

  &::before {
    content: '';
    display: inline-block;
    width: 2px;
    height: 24px;
    background-color: transparent;
  }
  
  ${({ theme, active }) => active && css`
    color: ${theme.colors.primary};
    
    &::before {
      background-color: ${theme.colors.primary};
    }
  `}
`;

const Wrapper = styled.ul`
  ${RESET_UL}
`;

export default {
  Wrapper,
  Item
};
