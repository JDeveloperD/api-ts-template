import React, { FC } from 'react';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import SliderStyled from './slider.styled';

interface SliderProps {
  items: Array<any>
  render: any
}

SwiperCore.use([Pagination]);

const Slider: FC<SliderProps> = ({ items, render, ...props }) => {
  return (
    <SliderStyled.Wrapper>
      <Swiper
        spaceBetween={20}
        pagination={{ clickable: true }}
      >
        {items.map(render)}
      </Swiper>
    </SliderStyled.Wrapper>
  );
};

export default Slider;
