import { RESET_BUTTON, GRAY_SCALE, TRANSITIONS } from '@styles';
import styled, { css } from 'styled-components';
import { ThemePropsInterface } from '@styles/styled';
import { lighten, invert, readableColor } from 'polished';

export type ButtonStyledPropsInterface = Pick<ThemePropsInterface, 'color'> & {
  variant?: 'filled' |'outlined' | 'icon',
  block?: boolean,
  roundedPill?: boolean,
  bold?: boolean
}

const Button = styled.button<ButtonStyledPropsInterface>`
  ${RESET_BUTTON}
  position: relative;
  border-radius: 0.35rem;
  padding: 0.30rem 1rem;
  font-size: 14px;
  transition: ${TRANSITIONS.base};

  ${({ theme, color }) => color && css`
    color: ${theme.colors[color]};
  `}

  ${({ theme, color, variant }) => variant === 'filled' && color && css`
    background: ${theme.colors[color]};
    border-color: ${theme.colors[color]};
    color: ${readableColor(theme.colors[color], theme.colors.gray, theme.colors.light, true)};

    &:hover {
      background: ${lighten(0.1, theme.colors[color])}
      box-shadow: 0 1px 2px 0 #b4b4b54c,0 1px 3px 1px #acacac26;
    }
  `}

  ${({ theme, color, variant }) => variant === 'outlined' && color && css`
    border: 1px solid ${theme.colors[color]};

    &:hover {
      background: ${theme.colors[color]};
      color: ${readableColor(theme.colors[color], theme.colors.gray, theme.colors.light, true)};
    }
  `}

  ${({ theme, color, variant }) => variant === 'icon' && color && css`
    color: ${theme.colors[color]};
    padding: 0.65rem;
  `}

  ${({ block }) => block && css`
    display: flex;
    width: 100%;
  `}

  ${({ roundedPill }) => roundedPill && css`
    border-radius: 50px;
  `}

  ${({ bold }) => bold && css`
    font-weight: bold;
  `}
`;

export default Button;
