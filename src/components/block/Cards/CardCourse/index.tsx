import { HeadLine, Paragraph, Small } from '@components/typography';
import { Badge, Button, ButtonPlay, Spiner } from '@components/ui';
import CardCourseStyled from './cardcourse.styled';
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { FiThumbsUp, FiPlay } from 'react-icons/fi';

const CardCourse = () => {
  return (
    <CardCourseStyled.Wrapper>
      {/**
       * Head Card
       */}
      <CardCourseStyled.Head>
        <CardCourseStyled.Image image="https://crehana-public-catalog.imgix.net/images/courses/promo-images/954d2f1e/f40fa18d.jpeg?auto=format&w=322&h=219&q=55&fit=crop&dpr=2" />
        <CardCourseStyled.Level>
          <Badge color='primary'>Básico</Badge>
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
        <HeadLine size={6} className="mb-1">Python intermedio: funciones y algoritmosas</HeadLine>
        <Paragraph color='gray'>Por David Sandoval</Paragraph>
        <div>
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
          <HeadLine color='primary' size={5} className="mb-0">
            $ 59.99
          </HeadLine>

          <Small color='gray' as="del">
            $ 120.99
          </Small>
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
