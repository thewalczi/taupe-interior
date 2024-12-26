import styles from './hero.module.scss';

export const HeroPage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          Stwórzmy razem <i>wnętrze</i>, w&nbsp;którym poczujesz&nbsp;się <span>jak&nbsp;w&nbsp;domu.</span>
        </h1>
        <div className={styles.image} />
      </div>
    </section>
  );
};
