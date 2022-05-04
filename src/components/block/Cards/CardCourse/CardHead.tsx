import { Badge, ButtonPlay } from '@components/ui';
import CardCourseStyled from './cardcourse.styled';
import { FiPlay } from 'react-icons/fi';
import { FC } from 'react';

const CardHead: FC<{ image: string, level: number, functionOpenVideoPreview: Function }> = ({ image, level, functionOpenVideoPreview }) => {
  return (
    <CardCourseStyled.Head onClick={functionOpenVideoPreview}>
      {/**
     * https://crehana-public-catalog.imgix.net/images/courses/promo-images/954d2f1e/f40fa18d.jpeg?auto=format&w=322&h=219&q=55&fit=crop&dpr=2
    */}
      <CardCourseStyled.Image image={image} />
      <CardCourseStyled.Level>
        {level === 1 && <Badge color='success'>Básico</Badge>}
        {level === 2 && <Badge color='warning'>Intermedio</Badge>}
        {level === 3 && <Badge color='danger'>Avanzado</Badge>}
      </CardCourseStyled.Level>
      <ButtonPlay position='center' />
      <CardCourseStyled.Overlay>
        <FiPlay /> Ver el trailer
      </CardCourseStyled.Overlay>
    </CardCourseStyled.Head>
  );
};

export default CardHead;
