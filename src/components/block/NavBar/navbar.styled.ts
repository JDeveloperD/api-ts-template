import { COLORS, FLEX_CENTER, GRAY_SCALE, MEDIA_BREAKPOINTS, POSITION_RELATIVE_RESET, RESET_BUTTON, RESET_UL, TRANSITIONS, zerosIndex, Z_INDEXS } from '@styles';
import { rgba } from 'polished';
import styled, { css } from 'styled-components';

/**
 * Variables
 */
const BORDER_COLOR = COLORS.black;

const SubListLink = styled.a`
  text-decoration: none;
  color: white;
  display: block;
  padding: 0.8rem;
  border-radius: 0.4rem;
  transform: ${TRANSITIONS.base};
  text-transform: capitalize;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }

  ${MEDIA_BREAKPOINTS.laptop} {
    color: white;
    white-space: nowrap;
  }
`;

const SubListItem = styled.li``;

const Divider = styled.div<{ isOpen: boolean }>`
  height: 1px;
  background: ${BORDER_COLOR};
  transition: background 0.4s linear;

  ${({ isOpen }) => isOpen && css`
    background: transparent;
  `}

  ${MEDIA_BREAKPOINTS.laptop} {
    display: none;
  }
`;

const SubList = styled.ul<{ isOpen: boolean }>`
  ${RESET_UL}

  overflow: hidden;
  height: auto;
  max-height: 0;
  transition: max-height 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  ${({ isOpen }) => isOpen && css`
    transition: max-height 3s cubic-bezier(0.24, 0.67, 0.81, 1.06);
    will-change: unset;
    max-height: 100vh;
  `}

  ${MEDIA_BREAKPOINTS.laptop} {
    overflow: initial;
    position: absolute;
    top: calc(100% + 20px);
    max-height: initial;
    background: ${GRAY_SCALE[1000]};
    border-radius: 0.5rem;
    padding: 1rem 1.5rem;
    border-bottom: 4px solid ${({ theme }) => theme.colors.primary};
    visibility: hidden;
    opacity: 0;
    transition: opacity ${TRANSITIONS.base};

    ${({ isOpen }) => isOpen && css`
      visibility: visible;
      opacity: 1;
    `}
  }
`;

const Link = styled.a<{light: boolean}>`
  ${RESET_BUTTON}
  text-decoration: none;
  color: white;
  display: flex;
  justify-content: space-between;
  width: 100%;
  text-align: left;
  padding: 1.4rem 0;
  font-size: 1.25rem;
  text-transform: capitalize;
  transition: ${TRANSITIONS.base};

  &:hover {
    color: white;
  }

  ${MEDIA_BREAKPOINTS.laptop} {
    color: ${({ light }) => !light && 'inherit'};
    width: auto;
    gap: 0.5rem;
    padding: 0;
    font-size: 1rem;
    font-weight: 500;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const Item = styled.li<{ divider?: boolean }>`
  position: relative;
  ${({ divider }) => !divider && css`
    border-bottom: 1px solid ${BORDER_COLOR};
  `}

  ${MEDIA_BREAKPOINTS.laptop} {
    border-bottom: 0;
  }
`;

const IconArrow = styled.span<{ up: boolean }>`
  color: ${({ theme }) => theme.colors.primary};
  
  ${({ up }) => up && css`
    transform: rotate(180deg);
  `}

  ${MEDIA_BREAKPOINTS.laptop} {
    color: inherit;
  }
`;

const List = styled.ul`
  ${RESET_UL}

  overflow-y: scroll;
  padding: 0 1rem;

  ${MEDIA_BREAKPOINTS.laptop} {
    overflow-y: initial;
    display: flex;
    gap: 1rem;
    height: 100%;
    align-items: center;
  }
`;

const Foot = styled.footer`
  ${MEDIA_BREAKPOINTS.laptop} {
    display: none;
  }
`;

const Head = styled.header`
  ${FLEX_CENTER};
  padding: 1.5rem 1rem;
  justify-content: space-between;

  ${MEDIA_BREAKPOINTS.laptop} {
    display: none;
  }
`;

const Container = styled.div<{ isOpen: boolean }>`
  ${zerosIndex({ zIndex: Z_INDEXS.header.nav, position: 'fixed' })}

  background: ${GRAY_SCALE[1000]};
  height: 100%;
  left: -100%;
  right: initial;
  transition: left 0.4s ease-in-out;

  ${({ isOpen }) => isOpen && css`
    left: 0;
    right: 0;
  `}

  ${MEDIA_BREAKPOINTS.laptop} {
    max-width: 360px;
  }

  ${MEDIA_BREAKPOINTS.laptop} {
    ${POSITION_RELATIVE_RESET}
    background: none;
    max-width: initial;
  }
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  ${zerosIndex({ zIndex: Z_INDEXS.header.nav, position: 'fixed' })}

  background: ${rgba(GRAY_SCALE[1000], 0.6)};
  backdrop-filter: blur(2px);
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  ${({ isOpen }) => isOpen && css`
    visibility: visible;
    opacity: 1;
  `}

  ${MEDIA_BREAKPOINTS.laptop} {
    display: none;
  }
`;

const Wrapper = styled.nav`
`;

export default {
  Wrapper,
  Overlay,
  Container,
  Head,
  Foot,
  List,
  Divider,
  Item,
  Link,
  IconArrow,
  SubList,
  SubListItem,
  SubListLink
};
