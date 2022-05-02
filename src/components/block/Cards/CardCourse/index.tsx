import { HeadLine, Small } from '@components/typography';
import { Button, ButtonCart } from '@components/ui';
import CardCourseStyled from './cardcourse.styled';
import { AiOutlineUser } from 'react-icons/ai';
import { FiThumbsUp } from 'react-icons/fi';
import { Course } from '@api/resources';
import { FC, useContext, useEffect, useState } from 'react';
import { UserCtx } from '@contexts/UserCtx';
import CardHead from './CardHead';
import CardBody from './CardBody';

type CardCourseProps = Course

const CardCourse: FC<CardCourseProps> = ({
  id,
  name,
  price,
  discount,
  instructor,
  level,
  video,
  rating,
  totalStudents
}) => {
  const { addCourseToCart, removeCourseToCart, cart } = useContext(UserCtx);
  const [isCourseInCart, setIsCourseInCart] = useState<boolean>(false);

  useEffect(() => {
    const findCouse = cart?.find(course => course.id === id);
    setIsCourseInCart(!!findCouse);
  }, [cart]);
  return (
    <CardCourseStyled.Wrapper>
      {/**
       * Head Card
       */}
      <CardHead image={video.thumb} level={level} />

      {/**
       * Body Card
       */}
      <CardBody
        nameCourse={name}
        instructorName={instructor.name}
        price={price}
        discount={discount}
        rating={rating}
        totalStudents={totalStudents}
      />

      {/**
       * Foot Card
       */}
      <CardCourseStyled.Foot>
        <ButtonCart
          isItemInCart={isCourseInCart}
          addToCartFunction={() => addCourseToCart(id)}
          removeToCartFunction={() => removeCourseToCart(id)}
        />
        <Button
          className='w-100'
          color='primary'
        >Obtener Membresía</Button>
      </CardCourseStyled.Foot>
    </CardCourseStyled.Wrapper>
  );
};

export default CardCourse;
