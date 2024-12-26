import React from 'react';
import styles from './about.module.scss';

export const AboutPage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.avatar} />
        <p className={styles.text}>
          Duis at mi non tellus malesuada tincidunt. Cras in neque. Sed lacinia, felis ut sodales pretium, justo sapien
          hendrerit est, et convallis nisi quam sit amet erat. Suspendisse consequat nibh a mauris. Curabitur libero
          ligula, faucibus at, mollis ornare, mattis et, libero. <br /> Aliquam pulvinar congue pede. Fusce condimentum
          turpis vel dolor. Ut blandit. Sed elementum justo quis sem. Sed eu orci eu ante iaculis accumsan. Sed suscipit
          dolor quis mi. Curabitur ultrices nonummy lacus. Morbi ipsum ipsum, adipiscing eget, tincidunt{' '}
        </p>
      </div>
    </section>
  );
};
