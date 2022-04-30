import { FC, ReactNode } from 'react';
import GridStyled from './grid.styled';

type GridProps = {
  component: ReactNode,
  columns: number,
  items: Array<any>
}

const Grid: FC<GridProps> = ({ items, component, columns, ...props }) => {
  return (
    <GridStyled.Wrapper columns={columns}>
      {items.length > 0 && items.map(item => {
        return (
          <GridStyled.Item key={item.id}>{component}</GridStyled.Item>
        );
      })}
    </GridStyled.Wrapper>
  );
};

export default Grid;
