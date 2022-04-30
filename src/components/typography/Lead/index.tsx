import { ThemePropsInterface } from '@styles/styled';
import styled, { css } from 'styled-components';

export type LeadhStyledTypes = Pick<ThemePropsInterface, 'color'>

const Lead = styled.p<LeadhStyledTypes>`
  font-weight: 300;
  font-size: 20px;
  line-height: 30px;

  ${({ theme, color }) => color && css`
    color: ${theme.colors[color]};
  `}
`;

export default Lead;
