import { FC } from 'react';
import GridStyled from './grid.styled';

type GridProps = {
  render: any,
  columns: 2 | 3 | 4,
  items: Array<any>
}

const Grid: FC<GridProps> = ({ items, render, columns, ...props }) => {
  return (
    <GridStyled.Wrapper columns={columns}>
      {items.map(render)}
    </GridStyled.Wrapper>
  );
};

export default Grid;
