import { GRAY_SCALE } from '@styles';
import { rgba } from 'polished';
import styled, { css } from 'styled-components';

interface InputProps {
  invalid?: boolean
  type: 'text' | 'date' | 'number' | 'password' | 'email'
}

const Input = styled.input<InputProps>`
  display: block;
  width: 100%;
  padding: 1.5rem 2rem 0.5rem 1rem;
  border-radius: 0.5rem;
  border: 2px solid transparent;
  background: ${({ theme }) => rgba(theme.colors.light, 0.05)};
  color: ${({ theme }) => theme.colors.light};
  transition: 0.2s ease;

  &:hover {
    background: ${({ theme }) => rgba(theme.colors.light, 0.1)};
  }

  &::placeholder {
    color: ${GRAY_SCALE[900]};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  ${({ theme, invalid }) => invalid && css`
    &, 
    &:focus {
      border: 1px solid ${theme.colors.danger};
    }
  `}
`;

export default Input;
