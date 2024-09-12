import styled from 'styled-components';
import { breakpointStep, mediaQuery } from '../../helpers/breakpoints';
import { useCallback, useRef } from 'react';
import { Socials } from './Socials';
import { useResize } from '../../hooks/useResize';

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  {
    id: 'about',
    label: 'O mnie',
  },
  {
    id: 'projects',
    label: 'Projekty',
  },
  {
    id: 'offer',
    label: 'Oferta',
  },
  {
    id: 'contact',
    label: 'Kontakt',
  },
];

const MenuBtn = styled.button`
  border: 2px solid red;
`;
const Nav = styled.nav`
  position: absolute;
  top: 100%;
  right: 100%;
  width: 100%;
  height: 70vh;
  background-color: #a0937d;
  transition: right 0.3s;

  ${mediaQuery.md`
    position: static;  
    height: auto;
    flex: 1 1 50%;
  `}

  &.menu--open {
    right: 0%;
  }
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  ${mediaQuery.md`
    flex-direction: row;
    justify-content: flex-end;
    `}
`;

const NavItem = styled.li`
  color: white;
  font-size: 2.4rem;
  font-weight: 400;
  padding: 0.8rem 1.6rem;
  line-height: 2.4rem;
  transition: color 0.2s;

  &:hover {
    color: #b6c7aa;
    cursor: pointer;
  }
`;

export const Navigation = () => {
  const navRef = useRef<HTMLDivElement>(null);

  const { width } = useResize();

  const handleToggleMenu = useCallback(() => {
    if (navRef.current) {
      navRef.current.classList.toggle('menu--open');
    }
  }, []);

  return (
    <>
      {width > breakpointStep.md ? null : <MenuBtn onClick={handleToggleMenu}>Menu</MenuBtn>}
      <Nav ref={navRef}>
        <NavList>
          {navItems.map((item: NavItem, i: number) => (
            <NavItem key={`${item.id}_${i}`}>{item.label}</NavItem>
          ))}
        </NavList>
        {width > breakpointStep.md ? null : <Socials />}
      </Nav>
    </>
  );
};
