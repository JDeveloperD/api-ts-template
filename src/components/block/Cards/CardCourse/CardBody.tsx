import { HeadLine, Small } from '@components/typography';
import CardCourseStyled from './cardcourse.styled';
import { AiOutlineUser } from 'react-icons/ai';
import { FiThumbsUp } from 'react-icons/fi';
import { FC } from 'react';

interface Price {
  currencySimbol: string,
  amount: number | string
}

type CardBodyProps = {
  nameCourse: string,
  instructorName: string,
  price: Price,
  discount?: Price
  totalStudents: number
  rating: number
}

const CardBody: FC<CardBodyProps> = ({
  nameCourse,
  instructorName,
  price,
  discount,
  totalStudents,
  rating
}) => {
  return (
    <CardCourseStyled.Body>
      <HeadLine size={5} className="mb-1">{nameCourse}</HeadLine>
      <Small color='gray'>{instructorName}</Small>
      <div className='mt-3'>
        <Small color='gray' className='d-inline-flex align-items-center gap-2'>
          <AiOutlineUser />
          {totalStudents} alumnos
        </Small>
        <Small color='gray' className='d-inline-flex align-items-center gap-2 ms-4'>
          <FiThumbsUp />
          {(rating * 100) / 5}%
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
  );
};

export default CardBody;
