import { GRAY_SCALE, RESET_UL, TRANSITIONS } from '@styles';
import styled from 'styled-components';

const List = styled.ul`
  ${RESET_UL}
  padding-left: 0.5rem;

  li {
    display: block;
    padding: 0.25rem 1rem 0.25rem 1rem;
  }

  label {
    cursor: pointer;
  }
`;

const SubItemParent = styled.summary`
  list-style: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0;
`;

const ItemParent = styled.summary`
  list-style: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  font-weight: 600;
`;

const Group = styled.details`
  transition: ${TRANSITIONS.base};
  border-bottom: 1px solid ${({ theme }) => theme.colors.light};
  
  &:last-child {
    border: none;
  }

  > summary > svg {
    transition: ${TRANSITIONS.base};
  }

  &[open] {
    border-color: transparent;

    > summary > svg {
      transform: rotate(180deg);
    }
  }
`;

const Wrapper = styled.div`
  width: 100%;
`;

export default {
  Wrapper,
  Group,
  ItemParent,
  SubItemParent,
  List
};
