import { HeadLine, Small } from '@components/typography';
import { Badge, Button, ButtonPlay, Spiner } from '@components/ui';
import CardCourseStyled from './cardcourse.styled';
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { FiThumbsUp, FiPlay } from 'react-icons/fi';
import { ICourse } from '@api/resources';
import { FC } from 'react';

type CardCourseProps = ICourse

const CardCourse: FC<CardCourseProps> = ({
  id,
  name,
  price,
  discount,
  instructor,
  level,
  video
}) => {
  return (
    <CardCourseStyled.Wrapper>
      {/**
       * Head Card
       */}
      <CardCourseStyled.Head>
        {/**
         * https://crehana-public-catalog.imgix.net/images/courses/promo-images/954d2f1e/f40fa18d.jpeg?auto=format&w=322&h=219&q=55&fit=crop&dpr=2
        */}
        <CardCourseStyled.Image image={video.thumb} />
        <CardCourseStyled.Level>
          {level === 1 && <Badge color='success'>Básico</Badge>}
          {level === 2 && <Badge color='warning'>Intermedio</Badge>}
          {level === 3 && <Badge color='danger'>Avanzado</Badge>}
        </CardCourseStyled.Level>
        <ButtonPlay position='center'/>
        <CardCourseStyled.Overlay>
          <FiPlay /> Ver el trailer
        </CardCourseStyled.Overlay>
      </CardCourseStyled.Head>

      {/**
       * Body Card
       */}
      <CardCourseStyled.Body>
        <HeadLine size={6} className="mb-1">{name}</HeadLine>
        <Small color='gray'>{instructor.name}</Small>
        <div className='mt-3'>
          <Small color='gray' className='d-inline-flex align-items-center gap-2'>
            <AiOutlineUser />
            3560 alumnos
          </Small>
          <Small color='gray' className='d-inline-flex align-items-center gap-2 ms-4'>
            <FiThumbsUp />
            100%
          </Small>
        </div>
        <CardCourseStyled.Amount className='mt-3'>
          {discount && (
            <>
              <HeadLine color='danger' size={5} className="mb-0">
                {discount.currencySimbol} {discount.amount}
              </HeadLine>
              <Small color='gray' as="del">
                {price.currencySimbol} {price.amount}
              </Small>
            </>
          )}

          {!discount && (
            <HeadLine size={5}>
              {price.currencySimbol} {price.amount}
            </HeadLine>
          )}

        </CardCourseStyled.Amount>
      </CardCourseStyled.Body>

      {/**
       * Foot Card
       */}
      <CardCourseStyled.Foot>
        <Button
          color='primary'
          variant='outlined'
          className='me-2'
          isLoading={false}
          componentLoading={<Spiner sm />}
          onClick={() => console.log(id)}
        >
          <AiOutlineShoppingCart />
        </Button>
        <Button
          className='w-100'
          color='primary'
        >Obtener Membresía</Button>
      </CardCourseStyled.Foot>
    </CardCourseStyled.Wrapper>
  );
};

export default CardCourse;
