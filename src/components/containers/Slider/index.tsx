import React, { FC } from 'react';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import SliderStyled from './slider.styled';

interface SliderProps {
  element: React.ReactNode
  items: Array<any>
}

SwiperCore.use([Pagination]);

const Slider:FC<SliderProps> = ({ items, element, ...props }) => {
  return (
    <SliderStyled.Wrapper>
      <Swiper
        spaceBetween={20}
        pagination={{ clickable: true }}
      >
        {items.length > 0 && items.map(item => (
          <SwiperSlide key={item.id}>
            {element}
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderStyled.Wrapper>
  );
};

export default Slider;
