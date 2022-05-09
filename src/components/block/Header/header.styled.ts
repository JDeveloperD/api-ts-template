import { GRAY_SCALE, MEDIA_BREAKPOINTS, TRANSITIONS, Z_INDEXS } from '@styles';
import styled from 'styled-components';
import { rgba } from 'polished';

const Account = styled.div`
  position: absolute;
  top: calc(100% + 1.5rem);
  background: ${GRAY_SCALE[1000]};
  right: 0;
  padding: 1rem;
  border-radius: 1rem;
  width: calc(100vw - 1.5rem);
  z-index: 20;

  &::after {
    content: '';
    position: absolute;
    bottom: 100%;
    right: 1.5rem;
    display: block;
    border-top: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid ${GRAY_SCALE[1000]};
    border-left: 10px solid transparent;
    z-index: 20;
  }

  ${MEDIA_BREAKPOINTS.mobile} {
    left: initial;
    width: 400px;
  }
`;

const AccountDetails = styled.details`
  position: relative;

  summary {
    list-style: none;
    display: flex;
  }

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${rgba(GRAY_SCALE[1000], 0.6)};
    backdrop-filter: blur(1px);
    visibility: hidden;
    opacity: 0;
    transition: ${TRANSITIONS.base};
  }
  &[open] {
    &::before {
      opacity: 1;
      visibility: visible;
    }
  }
`;

const Avatar = styled.div`
  display: inline-block;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  overflow: hidden;
  margin-left: 1rem;
`;

const Wrapper = styled.header`
  padding: 1rem 0;
  position: relative;
  z-index: ${Z_INDEXS.header.sticky};

`;

export default {
  Wrapper,
  Avatar,
  AccountDetails,
  Account
};
