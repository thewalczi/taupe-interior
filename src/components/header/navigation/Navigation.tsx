import { breakpointStep } from '../../../helpers/breakpoints';
import { Dispatch, SetStateAction, useCallback, useEffect } from 'react';
import { Socials } from '../../socials/Socials';
import { useResize } from '../../../hooks/useResize';
import { MenuButton } from '../menu-button/MenuButton';
import styles from './navigation.module.scss';
import { useOffer } from '../../../hooks/useOffer';

interface NavItem {
  id: string;
  label: string;
  customAction?: () => void;
}

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export const Navigation = ({ isMenuOpen, setIsMenuOpen }: NavigationProps) => {
  const { width } = useResize();
  const { openFile } = useOffer();

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
      customAction: openFile,
    },
    {
      id: 'contact',
      label: 'Kontakt',
    },
  ];

  const handleToggleMenu = useCallback(() => {
    setIsMenuOpen((prev: boolean) => !prev);
  }, [setIsMenuOpen]);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
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
          {navItems.map((item: NavItem, i: number) => {
            const { id, label, customAction } = item;
            return (
              <li key={`${id}_${i}`} onClick={() => (customAction ? customAction() : scrollToSection(id))}>
                {label}
              </li>
            );
          })}
        </ul>
        <Socials />
      </nav>
    </>
  );
};
