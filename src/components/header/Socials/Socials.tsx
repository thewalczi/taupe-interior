import { FacebookIcon } from '../../../utils/Facebook.icon';
import { InstagramIcon } from '../../../utils/Instagram.icon';
import styles from './socials.module.scss';

export const Socials = () => {
  return (
    <div className={styles.container}>
      <a href="https://www.facebook.com/profile.php?id=61563446163846" target="_blank" rel="noreferrer noopener">
        <FacebookIcon />
      </a>
      <a href="https://www.instagram.com/taupe_interior/" target="_blank" rel="noreferrer noopener">
        <InstagramIcon />
      </a>
    </div>
  );
};
