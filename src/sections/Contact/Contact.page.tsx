import React from 'react';
import styles from './contact.module.scss';

export const ContactPage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h2>Skontaktujmy się</h2>
        <div className={styles.contact}>
          <div className={styles['contact-image']} />
          <div className={styles['contact-info']}>
            <div className={styles['contact-info__email']}>
              <h4>Email:</h4>
              <p>biuro@taupe-interior.pl</p>
            </div>
            <div className={styles['contact-info__phone']}>
              <h4>Telefon:</h4>
              <p>+48 570 750 870</p>
            </div>
          </div>
        </div>
        <form className={styles.form}>
          <div className={styles['form-group']}>
            <label htmlFor="name">Imię i nazwisko / Firma</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="message">Wiadomość</label>
            <textarea id="message" name="message" required />
          </div>
          <button type="submit">Wyślij</button>
        </form>
      </div>
    </section>
  );
};
