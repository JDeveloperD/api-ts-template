import styled, { css } from 'styled-components';

interface SpinerStyledInterface {
  sm?: boolean
}

const Spiner = styled.span<SpinerStyledInterface>`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  vertical-align: -0.125em;
  border: 0.25em solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  -webkit-animation: .75s linear infinite spinner-border;
  animation: .75s linear infinite spinner-border;

  ${({ sm }) => sm && css`
    width: 1rem;
    height: 1rem;
    border-width: 0.2em;
  `}
`;

export default Spiner;
