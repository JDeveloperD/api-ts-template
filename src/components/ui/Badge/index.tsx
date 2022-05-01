import { ThemePropsInterface } from '@styles/styled';
import styled, { css } from 'styled-components';

type BadfeStyledInterface = Pick<ThemePropsInterface, 'color'> & {
  position?: 'top-right'
  shape?: 'rounded' | 'circle',
}

const Badge = styled.span<BadfeStyledInterface>`
  display: inline-block;
  padding: 0.35em 0.65em;
  font-size: .75em;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;

  /**
   * --------------------------------------------
   * Position
   * --------------------------------------------
   */
  ${({ position }) => {
    if (position && position === 'top-right') {
      return css`
        position: absolute;
        top: -5px;
        right: -5px;
      `;
    }
  }}

  /**
  * --------------------------------------------
  * Shape
  * --------------------------------------------
  */
  ${({ shape }) => {
    if (shape && shape === 'rounded') {
      return css`
        border-radius: 50px;
      `;
    }
  }}

  ${({ theme, color }) => color && css`
    background: ${theme.colors[color]};
    color: white;
  `}
`;

export default Badge;
