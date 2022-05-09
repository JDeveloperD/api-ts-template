import { ThemePropsInterface } from '@styles/styled';
import styled, { css } from 'styled-components';

export type SmallStyledTypes = Pick<ThemePropsInterface, 'color'>

const Small = styled.small<SmallStyledTypes>`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  
  ${({ theme, color }) => color && css`
    color: ${theme.colors[color]};
  `}

  ${({ bold }) => bold && css`
    font-weight: bold;
  `}
`;

export default Small;
