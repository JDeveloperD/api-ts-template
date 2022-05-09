import styled from 'styled-components';

const Label = styled.label`
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.light};
`;

export default Label;
