import styled from 'styled-components';
import { breakpointStep, mediaQuery } from '../../helpers/breakpoints';
import { useCallback, useEffect, useState } from 'react';
import { Socials } from './Socials';
import { useResize } from '../../hooks/useResize';
import { MenuButton } from './MenuButton';

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
    id: 'portfolio',
    label: 'Portfolio',
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

const Nav = styled.nav`
  position: absolute;
  top: 100%;
  right: 100%;
  width: 100%;
  padding-bottom: 3.2rem;
  background-color: #a1988f;
  transition: right 0.3s;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  ${mediaQuery.lg`
    flex-direction: column-reverse;
    align-items: end;
    position: static;  
    height: auto;
    flex: 1 1 50%;
    padding-bottom: 0;
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
  gap: 1.2rem;
  text-align: center;

  ${mediaQuery.lg`
    flex-direction: row;
    justify-content: flex-end;
    margin-right: -1.6rem;
    `}
`;

const NavItem = styled.li`
  color: white;
  font-size: 1.8rem;
  font-weight: 400;
  padding: 1.6rem;
  line-height: 2.4rem;
  transition: color 0.2s;
  white-space: nowrap;

  ${mediaQuery.lg`
    padding: 0.8rem 1.6rem;
   `}

  &:hover {
    color: #b6c7aa;
    cursor: pointer;
  }
`;

export const Navigation = () => {
  const { width } = useResize();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleToggleMenu = useCallback(() => {
    setIsMenuOpen((prev: boolean) => !prev);
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    const anchor = window.location.hash;
    const timeout = setTimeout(() => {
      const id = anchor.slice(1);
      scrollToSection(id);
    }, 500);
    if (anchor) {
      timeout;
    }
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {width >= breakpointStep.lg ? null : <MenuButton onClick={handleToggleMenu} active={isMenuOpen} />}
      <Nav className={isMenuOpen ? 'menu--open' : ''}>
        <NavList>
          {navItems.map((item: NavItem, i: number) => (
            <NavItem key={`${item.id}_${i}`} onClick={() => scrollToSection(item.id)}>
              {item.label}
            </NavItem>
          ))}
        </NavList>
        <Socials />
      </Nav>
    </>
  );
};
