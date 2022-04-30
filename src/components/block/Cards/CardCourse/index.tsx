import { HeadLine } from '@components/typography';
import { Badge, Button, ButtonPlay } from '@components/ui';
import Image from 'next/image';
import CardCourseStyled from './cardcourse.styled';
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { FiThumbsUp } from 'react-icons/fi';

const CardCourse = () => {
  return (
    <CardCourseStyled.Wrapper>
      {/**
       * Head Card
       */}
      <CardCourseStyled.Head>
        <Image src="https://crehana-public-catalog.imgix.net/images/courses/promo-images/954d2f1e/f40fa18d.jpeg?auto=format&w=322&h=219&q=55&fit=crop&dpr=2" width={300} height={200} />
        <Badge color='primary'>Básico</Badge>
        <ButtonPlay />
      </CardCourseStyled.Head>

      {/**
       * Body Card
       */}
      <CardCourseStyled.Body>
        <HeadLine size={6}>Python intermedio: funciones y algoritmosas</HeadLine>
        <p>Por David Sandoval</p>
        <div>
          <span>
            <AiOutlineUser />
            3560 alumnos
          </span>
          <span>
            <FiThumbsUp />
            100%
          </span>
        </div>
      </CardCourseStyled.Body>

      {/**
       * Foot Card
       */}
      <CardCourseStyled.Foot>

        <Button
          color='primary'
          variant='outlined'
          className='me-2'
        >
          <AiOutlineShoppingCart />
        </Button>
        <Button color='primary'>Obtener Membresía</Button>
      </CardCourseStyled.Foot>
    </CardCourseStyled.Wrapper>
  );
};

export default CardCourse;
