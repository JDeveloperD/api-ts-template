import styled, { css } from 'styled-components';
import { ThemePropsInterface } from '@styles/styled';

type DisplayStyledType = ThemePropsInterface & {
  size: 1 | 2 | 3 | 4 | 5 | 6
}

const Display = styled.h1<DisplayStyledType>`
  font-weight: 300;
  color: ${({ theme, color }) => color && theme.colors[color]};
  
  ${({ size }) => {
    switch (size) {
      case 1:
        return css`
          font-size: 80px;
          line-height: 122px;      
        `;
      case 2:
        return css`
          font-size: 72px;
          line-height: 110px;   
        `;
      case 3:
        return css`
          font-size: 64px;
          line-height: 97px;
        `;
      case 4:
        return css`
          font-size: 56px;
          line-height: 85px;
        `;
      case 5:
        return css`
          font-size: 48px;
          line-height: 73px;
        `;
      default:
        return css`
          font-size: 40px;
          line-height: 61px;  
        `;
    }
  }}
`;

export default Display;
