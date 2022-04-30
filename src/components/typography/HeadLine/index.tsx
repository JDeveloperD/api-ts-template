import { ThemePropsInterface } from '@styles/styled';
import styled, { css } from 'styled-components';

type HeadLineStyledType = ThemePropsInterface & {
  size: 1 | 2 | 3 | 4 | 5 | 6
}

const HeadLine = styled.h4<HeadLineStyledType>`
  font-weight: 600;
  color: ${({ theme, color }) => color && theme.colors[color]};
  
  ${({ size }) => {
    switch (size) {
      case 1:
        return css`
          font-size: 36px;
          line-height: 55px;      
        `;
      case 2:
        return css`
          font-size: 32px;
          line-height: 49px;     
        `;
      case 3:
        return css`
          font-size: 28px;
          line-height: 43px;     
        `;
      case 4:
        return css`
          font-size: 24px;
          line-height: 37px;     
        `;
      case 5:
        return css`
          font-size: 20px;
          line-height: 30px;    
        `;
      default:
        return css`
          font-size: 16px;
          line-height: 24px;      
        `;
    }
  }}
`;

export default HeadLine;
