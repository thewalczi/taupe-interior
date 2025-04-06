import { ButtonHTMLAttributes, FC } from 'react';
import styles from './menuButton.module.scss';

interface MenuButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active: boolean;
  onClick: () => void;
}

export const MenuButton: FC<MenuButtonProps> = (props: MenuButtonProps) => {
  return (
    <button onClick={props.onClick} className={`${styles.container} ${props.active ? styles.active : ''}`}>
      <span className={styles.icon}>
        <span className={styles['icon--top']} />
        <span className={styles['icon--middle']} />
        <span className={styles['icon--bottom']} />
      </span>
    </button>
  );
};
