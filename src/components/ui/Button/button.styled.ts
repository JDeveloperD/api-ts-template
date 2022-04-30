import { RESET_BUTTON, GRAY_SCALE, TRANSITIONS } from '@styles';
import { ThemePropsInterface } from '@styles/styled';
import { darken } from 'polished';
import styled, { css } from 'styled-components';

export type ButtonStyledPropsInterface = Pick<ThemePropsInterface, 'color'> & {
  variant?: 'outlined' | 'only-icon'
}

const Wrapper = styled.button<ButtonStyledPropsInterface>`
  ${RESET_BUTTON}

  /**
   * ---------------------------------------
   * Styles Default
   * ---------------------------------------
   **/
  ${({ theme }) => css`
    color: ${theme.colors.textBody};
    background: ${GRAY_SCALE[100]};
    border-radius: 0.4rem;
    transition: ${TRANSITIONS.base};
    position: relative;
    
    &:hover {
      background: ${GRAY_SCALE[200]};
    }

    &:active {
      transform: scale(0.95);
    }
  `}

  /**
   * ---------------------------------------
   * Styles Color
   * ---------------------------------------
   **/
  ${({ theme, color }) => color && css`
    background: ${theme.colors[color]};
    color: white;

    &:hover {
      background: ${darken(0.2, theme.colors[color])}
    }
  `}

  /**
   * ---------------------------------------
   * Styles variant
   * ---------------------------------------
  **/
  ${({ theme, color, variant }) => {
    if (variant && color && variant === 'outlined') {
      return css`
        background: transparent;
        color: ${theme.colors[color]};
        border: 1px solid currentColor;

        &:hover {
          background: ${theme.colors[color]};
          color: white;
        }
      `;
    }

    if (variant && variant === 'only-icon') {
      return css`
        padding: 0.8rem;
      `;
    }
  }}
`;

export default {
  Wrapper
};
