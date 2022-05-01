import styled from 'styled-components';

const Wrapper = styled.div`
  .swiper-pagination {

  }

  .swiper-pagination-bullet {
    background: transparent;
    border: 1px solid ${({ theme }) => theme.colors.light};
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background: ${({ theme }) => theme.colors.light};
  }
`;

export default {
  Wrapper
};
