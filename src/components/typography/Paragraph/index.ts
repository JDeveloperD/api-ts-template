import { ThemePropsInterface } from '@styles/styled';
import styled, { css } from 'styled-components';

export type ParagraphStyledTypes = Pick<ThemePropsInterface, 'color'> & {
  bold?: boolean
}

const Paragraph = styled.p<ParagraphStyledTypes>`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  ${({ bold }) => bold && css`
    font-weight: bold;
  `}
  
  ${({ theme, color }) => color && css`
    color: ${theme.colors[color]};
  `}
`;

export default Paragraph;
