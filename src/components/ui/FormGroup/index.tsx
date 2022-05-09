import { FONTS_SIZES, TRANSITIONS } from '@styles';
import { ThemePropsInterface } from '@styles/styled';
import styled, { css } from 'styled-components';

export type FormGroupProps = Pick<ThemePropsInterface, 'color'> & {
  invalid?: boolean
  type?: 'error' | 'success'
}

const FormGroup = styled.div<FormGroupProps>`
  width: 100%;
  position: relative;
  margin-bottom: 1rem;
  
  label {
    color: ${({ theme }) => theme.colors.gray};
    position: absolute;
    pointer-events: none;
    left: 1rem;
    top: 1.25rem;
    transition: ${TRANSITIONS.base};
  }
  
  input {
    color: ${({ theme }) => theme.colors.light};
    
    &:not([value=""]) ~ label,
    &:focus ~ label {
      font-weight: 600;
      top: 0.25rem;
      font-size: ${FONTS_SIZES.sm};
    }
  }

  & > svg {
    color: ${({ theme }) => theme.colors.gray};
    position: absolute;
    top: 1.25rem;
    right: 1rem;
  }

  ${({ theme, invalid }) => invalid && css`
    label,
    svg {
      color: ${theme.colors.danger};
    }  

    input, input:focus {
      border: 2px solid ${theme.colors.danger};
    }
  `}
`;

export default FormGroup;
