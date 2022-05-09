import FilterCategoriesStyled from './filterCategories.styled';
import { Checkbox } from '@components/ui';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsChevronDown } from 'react-icons/bs';
import { Small } from '@components/typography';

const FilterCategories = ({ ...props }) => {
  return (
    <FilterCategoriesStyled.Wrapper {...props}>
      <FilterCategoriesStyled.Group open>
        <FilterCategoriesStyled.ItemParent>
          Categorias <BsChevronDown />
        </FilterCategoriesStyled.ItemParent>
        <details open>
          <FilterCategoriesStyled.SubItemParent>
            <AiOutlinePlus />
            Estructura agraria
          </FilterCategoriesStyled.SubItemParent>
          <FilterCategoriesStyled.List>
            <li>
              <label htmlFor="item1-1">
                <Checkbox
                  type="radio"
                  id='item1-1'
                  name='item1'
                  className='me-2'
                />
                <Small color='gray'>Todos</Small>
              </label>
            </li>
            <li>
              <label htmlFor="item1-2">
                <Checkbox
                  type="radio"
                  id='item1-2'
                  name='item1'
                  className='me-2'
                />
                <Small color='gray'>Sub categoria</Small>
              </label>
            </li>
            <li>
              <label htmlFor="item1-3">
                <Checkbox
                  type="radio"
                  id='item1-3'
                  name='item1'
                  className='me-2'
                />
                <Small color='gray'>Sub categoria</Small>
              </label>
            </li>
          </FilterCategoriesStyled.List>
        </details>
        <details open>
          <FilterCategoriesStyled.SubItemParent>
            <AiOutlinePlus />
            Expancion agricola
          </FilterCategoriesStyled.SubItemParent>
        </details>
        <details open>
          <FilterCategoriesStyled.SubItemParent>
            <AiOutlinePlus />
            Analisis de agroecosistemas
          </FilterCategoriesStyled.SubItemParent>
        </details>
        <details open>
          <FilterCategoriesStyled.SubItemParent>
            <AiOutlinePlus />
            Agricultura industrial
          </FilterCategoriesStyled.SubItemParent>
        </details>
      </FilterCategoriesStyled.Group>
      <FilterCategoriesStyled.Group open>
        <FilterCategoriesStyled.ItemParent>
          Niveles <BsChevronDown />
        </FilterCategoriesStyled.ItemParent>
        <FilterCategoriesStyled.List>
            <li>
              <label htmlFor="item1-1">
                <Checkbox
                  type="radio"
                  id='item1-1'
                  name='item1'
                  className='me-2'
                />
                <Small color='gray'>Basico</Small>
              </label>
            </li>
            <li>
              <label htmlFor="item1-2">
                <Checkbox
                  type="radio"
                  id='item1-2'
                  name='item1'
                  className='me-2'
                />
                <Small color='gray'>Intermedio</Small>
              </label>
            </li>
            <li>
              <label htmlFor="item1-3">
                <Checkbox
                  type="radio"
                  id='item1-3'
                  name='item1'
                  className='me-2'
                />
                <Small color='gray'>Avanzado</Small>
              </label>
            </li>
          </FilterCategoriesStyled.List>
      </FilterCategoriesStyled.Group>
      <FilterCategoriesStyled.Group>
        <FilterCategoriesStyled.ItemParent>
          Duracion <BsChevronDown />
        </FilterCategoriesStyled.ItemParent>
      </FilterCategoriesStyled.Group>
    </FilterCategoriesStyled.Wrapper>
  );
};

export default FilterCategories;
