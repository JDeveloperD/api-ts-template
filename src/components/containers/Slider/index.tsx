import React, { FC } from 'react';
import { Pagination, Autoplay } from 'swiper';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import SliderStyled from './slider.styled';

interface SliderProps {
  items: Array<any>
  render: any
}

const Slider: FC<SliderProps> = ({ items, render, ...props }) => {
  return (
    <SliderStyled.Wrapper>
      <Swiper
        autoplay
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        pagination={{ clickable: true }}
      >
        {items.map(render)}
      </Swiper>
    </SliderStyled.Wrapper>
  );
};

export default Slider;
