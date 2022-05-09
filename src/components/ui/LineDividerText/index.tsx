import { FONTS_SIZES } from '@styles';
import styled, { css } from 'styled-components';
import { ThemePropsInterface } from '@styles/styled';

export type LineDividerTextProps = Pick<ThemePropsInterface, 'color'> & {
  variant?: 'outlined' | 'only-icon',
  block?: boolean
  gap?: string
}

const LineDividerText = styled.div<LineDividerTextProps>`
  display: flex;
  align-items: center;
  gap: ${({ gap }) => gap};
  font-size: ${FONTS_SIZES.sm};
  white-space: nowrap;

  ${({ theme, color }) => color && css`
    color: ${theme.colors[color]};
  `}

  &::before,
  &::after {
    content: '';
    width: 100%;
    height: 1px; 
    background: ${({ theme, color }) => color && theme.colors[color]};
    display: block;
  }
`;

export default LineDividerText;
