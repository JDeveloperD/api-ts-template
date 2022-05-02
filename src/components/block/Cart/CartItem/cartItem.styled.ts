import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;
const Figure = styled.figure`
  position: relative;
  width: 100%;
  max-width: 100px;
  height: 70px;
`;

const Info = styled.div`
  width: 100%;
`;

export default {
  Wrapper,
  Figure,
  Info
};
