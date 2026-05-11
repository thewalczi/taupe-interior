import { useEffect, useState } from 'react';
import logo from '../../assets/logo.svg';
import { Navigation } from './navigation/Navigation';
import styles from './header.module.scss';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const header = document.querySelector('header');
      if (header && !isMenuOpen) {
        if (prevScrollPos > currentScrollPos || currentScrollPos < 25) {
          header.style.top = '0';
        } else {
          header.style.top = '-150px';
        }
        if (currentScrollPos < 50) {
          header.classList.remove(styles['container--scrolled']);
        } else {
          header.classList.add(styles['container--scrolled']);
        }
        prevScrollPos = currentScrollPos;
      }
    };

    //Detect if scroll is performed by navigation - don't show the navbar. Use zustand to keep the state. Reset state when the scroll finishes (Promise based and await after).

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen]);

  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <img className={styles.logo} src={logo} onClick={() => window.location.replace('/')} />
        <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </header>
  );
};
