import { useCallback, useEffect, useMemo, useState } from 'react';
import useContentful from '../../hooks/useContentful';
import styles from './hero.module.scss';

export const HeroPage = () => {
  const [heroUrl, setHeroUrl] = useState<string | undefined>();
  const { getHero } = useContentful();

  useEffect(() => {
    (async () => {
      const response = await getHero();
      setHeroUrl(response?.heroUrl);
    })();
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          Stwórzmy razem <i>wnętrze</i>, w&nbsp;którym poczujesz&nbsp;się <span>jak&nbsp;w&nbsp;domu.</span>
        </h1>
        <div className={styles.image}>
          <img src={heroUrl} />
        </div>
      </div>
    </section>
  );
};
