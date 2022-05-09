import styled from 'styled-components';

const ProgressBar = styled.progress`
  width: 100%;
  appearance: none;

  &::-webkit-progress-bar {
    background-color: white;
    border-radius: 1rem;
    height: 0.5rem;
  }

  &::-webkit-progress-value {
    border-radius: 1rem 0 0 1rem;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export default ProgressBar;
