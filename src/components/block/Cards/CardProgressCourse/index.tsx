import { HeadLine, Small } from '@components/typography';
import { ProgressBar } from '@components/ui';
import Image from 'next/image';
import CardProgressCourseStyled from './cardProgressCourse.styled';

const CardProgressCourse = () => {
  return (
    <CardProgressCourseStyled.Wrapper>
      <Small bold color="light">Continua viendo</Small>
      <CardProgressCourseStyled.Info className='mt-2'>
        <CardProgressCourseStyled.ImgCourse>
          <Image src="/img/image1.jpg" objectFit='cover' layout='fill' />
        </CardProgressCourseStyled.ImgCourse>
        <CardProgressCourseStyled.Progress>
          <HeadLine size={6} color='light'>Curso Profesional de Next.js</HeadLine>
          <Small color='light'>80%</Small>
          <ProgressBar max='100' value='80' />
        </CardProgressCourseStyled.Progress>
      </CardProgressCourseStyled.Info>
    </CardProgressCourseStyled.Wrapper>
  );
};

export default CardProgressCourse;
