import { useMemo } from 'react';
import { Socials } from '../socials/Socials';
import styles from './footer.module.scss';

export const Footer = () => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);
  return (
    <footer className={styles.container}>
      <Socials />
      <p>© Taupe Interior {currentYear}</p>
    </footer>
  );
};
