import Link from 'next/link';
import { FC, useState } from 'react';
import NavBarStyled from './navbar.styled';
import { BsChevronDown } from 'react-icons/bs';

export type NavBarItemProps = {
  id?: string,
  text: string,
  to: string,
  subItems?: NavBarItemProps[]
}

const NavBarItem: FC<NavBarItemProps> = ({ to, text, subItems }) => {
  const [activeSubItems, setActiveSubItems] = useState(false);
  if (subItems && subItems?.length > 0) {
    return (
      <NavBarStyled.Item divider={true}>
        <NavBarStyled.Link
          as="button"
          type='button'
          onClick={() => setActiveSubItems(!activeSubItems)}
        >
          {text}
          <NavBarStyled.IconArrow up={activeSubItems}>
            <BsChevronDown />
          </NavBarStyled.IconArrow>
        </NavBarStyled.Link>
        <NavBarStyled.Divider isOpen={activeSubItems} />
        <SubItemsNav subItems={subItems} isOpen={activeSubItems} />
      </NavBarStyled.Item>
    );
  } else {
    return (
      <NavBarStyled.Item>
        <Link href={to} passHref>
          <NavBarStyled.Link>
            {text}
          </NavBarStyled.Link>
        </Link>
      </NavBarStyled.Item>
    );
  }
};

const SubItemsNav: FC<{ subItems: NavBarItemProps[], isOpen: boolean }> = ({ subItems, isOpen }) => {
  return (
    <NavBarStyled.SubList isOpen={isOpen}>
      {subItems?.map(subItem => (
        <NavBarStyled.SubListItem key={subItem.id} >
          <Link href={subItem.to} passHref>
            <NavBarStyled.SubListLink>
              {subItem.text}
            </NavBarStyled.SubListLink>
          </Link>
        </NavBarStyled.SubListItem>
      ))}
    </NavBarStyled.SubList>
  );
};

export default NavBarItem;
