import { FLEX_CENTER, SHADOWS, TRANSITIONS, zerosIndex } from '@styles';
import styled, { css } from 'styled-components';

const Image = styled.div<{image: string}>`
  ${({ image }) => css`
    width: 100%;
    padding-bottom: 70%;
    background-image: url(${image});
    background-position: center;
    background-size: cover;
    position: relative;

    &::after {
      content: '';
      width: 100%;
      height: 100%;
      display: block;
      background: linear-gradient(1.42deg, #000000 1.21%, rgba(0, 0, 0, 0.47142) 52.81%, rgba(0, 0, 0, 0) 98.82%);
      position: absolute;
    }
  `}
`;

const Amount = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

const Overlay = styled.div`
  ${FLEX_CENTER}
  ${zerosIndex({ zIndex: 2, position: 'absolute' })}
  background: rgba(0,0,0,0.7);
  color: white;
  gap: 1rem;
  cursor: pointer;
  font-weight: 600;
  opacity: 0;
  transition: 0.3s ease-in;

  &:hover {
    opacity: 1;
  }
`;

const Level = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
`;

const Head = styled.div`
  position: relative;
`;

const Body = styled.div`
  padding: 1rem 0;
`;

const Foot = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  background-color: white;
  border-radius: 0.5rem 0.5rem 0 0;
  overflow: hidden;
  transition: ${TRANSITIONS.base};

  &:hover {
    box-shadow: ${SHADOWS.sm};
  }
`;

export default {
  Wrapper,
  Head,
  Overlay,
  Body,
  Foot,
  Image,
  Level,
  Amount
};
