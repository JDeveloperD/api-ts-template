import { Button, Logo } from '@components/ui';
import NavBarStyled from './navbar.styled';
import NavBarItem, { NavBarItemProps } from './NavBarItem';
import { CgClose } from 'react-icons/cg';

const navMainItems: Array<NavBarItemProps> = [
  {
    id: 'nav-main-item-1',
    text: 'agro club',
    to: '/'
  },
  {
    id: 'nav-main-item-2',
    text: 'cursos',
    to: '/',
    subItems: [
      {
        id: 'subitem-main-item-1',
        text: 'curso inicial',
        to: '/'
      },
      {
        id: 'subitem-main-item-2',
        text: 'curso para estudiantes',
        to: '/'
      },
      {
        id: 'subitem-main-item-3',
        text: 'curso para estudiantes',
        to: '/'
      }
    ]
  },
  {
    id: 'nav-main-item-3',
    text: 'especialistas',
    to: '/especialistas'
  },
  {
    id: 'nav-main-item-4',
    text: 'blog',
    to: '/blog'
  },
  {
    id: 'nav-main-item-5',
    text: 'contacto',
    to: '/contacto'
  },
  {
    id: 'nav-main-item-6',
    text: 'miembros',
    to: '/miembros'
  }
];

const NavBar = ({ light, openNav, handleClose }) => {
  return (
    <NavBarStyled.Wrapper>
      <NavBarStyled.Overlay isOpen={openNav} onClick={handleClose} />
      <NavBarStyled.Container isOpen={openNav} >
        <NavBarStyled.Head>
          <Logo />
          <Button
            variant='only-icon'
            color='primary'
            onClick={handleClose}
          >
            <CgClose />
          </Button>
        </NavBarStyled.Head>
        <NavBarStyled.List>
          {navMainItems?.map(itemNav => (
            <NavBarItem light={light} key={itemNav.id} {...itemNav} />
          ))}
        </NavBarStyled.List>
        <NavBarStyled.Foot>
          Foot
        </NavBarStyled.Foot>
      </NavBarStyled.Container>
    </NavBarStyled.Wrapper>
  );
};

export default NavBar;
