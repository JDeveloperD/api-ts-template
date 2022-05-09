import { FONTS_SIZES } from '@styles';
import styled, { css } from 'styled-components';
import { ThemePropsInterface } from '@styles/styled';

export type InputMessageProps = Pick<ThemePropsInterface, 'color'> & {
}

const InputMessage = styled.span<InputMessageProps>`
  display: inline-block;
  font-size: ${FONTS_SIZES.sm};
  padding-left: 1rem;
  
  ${({ theme, color }) => color && css`
    color: ${theme.colors[color]};
  `}
`;

export default InputMessage;
