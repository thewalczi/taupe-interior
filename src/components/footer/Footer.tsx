import React from 'react';
import { Socials } from '../socials/Socials';
import styles from './footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <Socials />
      <p>© Taupe Interior 2025</p>
    </footer>
  );
};
