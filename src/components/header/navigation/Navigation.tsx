import { breakpointStep } from '../../../helpers/breakpoints';
import { useCallback, useEffect, useState } from 'react';
import { Socials } from '../Socials';
import { useResize } from '../../../hooks/useResize';
import { MenuButton } from '../menuButton/MenuButton';
import styles from './navigation.module.scss';

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

export const Navigation = () => {
  const { width } = useResize();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleToggleMenu = useCallback(() => {
    console.log('clicked');
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
  }, [scrollToSection]);

  return (
    <>
      {width >= breakpointStep.lg ? null : <MenuButton onClick={handleToggleMenu} active={isMenuOpen} />}
      <nav className={`${styles.container} ${isMenuOpen ? styles['menu--open'] : ''}`}>
        <ul>
          {navItems.map((item: NavItem, i: number) => (
            <li key={`${item.id}_${i}`} onClick={() => scrollToSection(item.id)}>
              {item.label}
            </li>
          ))}
        </ul>
        <Socials />
      </nav>
    </>
  );
};
