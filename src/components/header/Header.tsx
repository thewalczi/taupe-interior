import { useEffect } from 'react';
import logo from '../../assets/logo.svg';
import { Navigation } from './navigation/Navigation';
import styles from './header.module.scss';

export const Header = () => {
  useEffect(() => {
    let prevScrollPos = window.scrollY;
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const header = document.querySelector('header');
      if (header) {
        if (prevScrollPos > currentScrollPos) {
          header.style.top = '0';
        } else {
          header.style.top = '-200px';
        }
        console.log(prevScrollPos, currentScrollPos);
        if (currentScrollPos < header.clientHeight) {
          header.classList.remove(styles['container--scrolled']);
        } else {
          header.classList.add(styles['container--scrolled']);
        }
        prevScrollPos = currentScrollPos;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <img className={styles.logo} src={logo} onClick={() => window.location.replace('/')} />
        <Navigation />
      </div>
    </header>
  );
};
