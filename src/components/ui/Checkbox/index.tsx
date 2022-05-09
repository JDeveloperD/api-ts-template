import styled from 'styled-components';
import { ThemePropsInterface } from '@styles/styled';

type CheckboxProps = Pick<ThemePropsInterface, 'color'> & {
  type: 'checkbox' | 'radio'
}

const Checkbox = styled.input<CheckboxProps>`
  width: 1rem;
  height: 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  appearance: none;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.gray};

  &[type=radio] {
    border-radius: 50%;
  }

  &:checked {
    border-color: ${({ theme, color }) => color ? theme.colors[color] : theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.primary};
  }
  &:checked[type=radio] {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e");
  }
  &:checked[type=checkbox] {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e");
  }


`;

export default Checkbox;
