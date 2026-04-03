import { useEffect, useState } from 'react';
import styles from './about.module.scss';
import useContentful, { AboutFields } from '../../hooks/useContentful';
import Markdown from 'react-markdown';

export const AboutPage = () => {
  const { getAbout } = useContentful();

  const [aboutData, setAboutData] = useState<AboutFields>();

  useEffect(() => {
    (async () => {
      const response = await getAbout();
      setAboutData(response);
    })();
  }, []);

  return (
    <section className={styles.container} id={'about'}>
      <div className={styles.wrapper}>
        <div className={styles['avatar-wrapper']}>
          <div className={styles.avatar}>
            <img src={aboutData?.avatar} />
          </div>
          <div className={styles['bg-image']}>
            <img src={aboutData?.bgImage} />
          </div>
        </div>
        <div className={styles.text}>
          <Markdown>{aboutData?.about}</Markdown>
        </div>
      </div>
    </section>
  );
};
