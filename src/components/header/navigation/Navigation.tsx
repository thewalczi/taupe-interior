import { breakpointStep } from '../../../helpers/breakpoints';
import { Dispatch, SetStateAction, useCallback } from 'react';
import { Socials } from '../../socials/Socials';
import { useResize } from '../../../hooks/useResize';
import { MenuButton } from '../menu-button/MenuButton';
import styles from './navigation.module.scss';
import { useOffer } from '../../../hooks/useOffer';
import useScrollToSection from '../../../hooks/useScrollToSection';

export type NavId = 'about' | 'portfolio' | 'offer' | 'contact';

interface NavItem {
  id: NavId;
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
  const { scrollToSection } = useScrollToSection();

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

  const handleNavClick = useCallback((id: NavId) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  }, []);

  return (
    <>
      {width >= breakpointStep.lg ? null : <MenuButton onClick={handleToggleMenu} active={isMenuOpen} />}
      <nav className={`${styles.container} ${isMenuOpen ? styles['menu--open'] : ''}`}>
        <ul>
          {navItems.map((item: NavItem, i: number) => {
            const { id, label, customAction } = item;
            return (
              <li key={`${id}_${i}`} onClick={() => (customAction ? customAction() : handleNavClick(id))}>
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
