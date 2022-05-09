import styled from 'styled-components';

const ImgCourse = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
`;

const Info = styled.div`
  display: flex;
  gap: 1rem;
`;

const Progress = styled.div`
  width: calc(100% - 66px);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;

const Wrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

export default {
  Wrapper,
  Info,
  Progress,
  ImgCourse
};
