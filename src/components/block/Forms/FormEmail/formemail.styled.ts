import { RESET_BUTTON } from '@styles';
import { rgba } from 'polished';
import styled, { css } from 'styled-components';

const Wrapper = styled.div<{error: boolean}>`
  width: 100%;
  display: flex;
  border: 1px solid transparent;
  background: ${({ theme }) => rgba(theme.colors.light, 0.1)};
  border-radius: 0.5rem;

  ${({ theme, error }) => error && css`
    border-color: ${theme.colors.danger};
  `}
`;

const Message = styled.div<{color?: 'danger' | 'success'}>`
  margin-top: 0.5rem;
  color: ${({ theme, color }) => color && theme.colors[color]};
`;

const Input = styled.input`
  padding: 0.75rem 0 0.75rem 0.75rem;
  border-radius: 0.5rem 0 0 0.5rem;
  background: transparent;
  border-style: none;
  width: 100%;
  color: ${({ theme }) => theme.colors.light};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

const Button = styled.button`
  ${RESET_BUTTON}
  background: transparent;
  border-radius: 0 0.5rem 0.5rem 0;
  color: ${({ theme }) => theme.colors.gray};
`;

export default {
  Wrapper,
  Input,
  Button,
  Message
};
