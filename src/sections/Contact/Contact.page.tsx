import React, { useEffect, useRef } from 'react';
import styles from './contact.module.scss';
import { useForm } from 'react-hook-form';
import type { FieldValues } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import emailjs from '@emailjs/browser';

const messageSchema = z.object({
  name: z.string().min(3, 'To pole musi mieć co najmniej 3 znaki'),
  email: z.string().email('Podaj poprawny adres email'),
  message: z
    .string()
    .min(10, 'Wiadomość musi mieć co najmniej 10 znaków')
    .max(500, 'Wiadomość może mieć maksymalnie 500 znaków'),
});

export const ContactPage = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(messageSchema),
  });

  useEffect(() => {
    emailjs.init({
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    });
  }, []);

  const onSubmit = async (data: FieldValues) => {
    if (formRef.current === null) return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className={styles.container} id={'contact'}>
      <div className={styles.wrapper}>
        <h2>Skontaktujmy się</h2>
        <div className={styles.details}>
          <div className={styles['details-image']} />
          <div className={styles['details-info']}>
            <div className={styles['details-info__email']}>
              <h4>Email:</h4>
              <p>biuro@taupe-interior.pl</p>
            </div>
            <div className={styles['details-info__phone']}>
              <h4>Telefon:</h4>
              <p>+48 570 750 870</p>
            </div>
          </div>
        </div>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)} ref={formRef}>
          <div className={styles['form-group']}>
            <label htmlFor="name">Imię i nazwisko / Firma</label>
            <input {...register('name')} type="text" id="name" name="name" required />
            {errors.name && <p>{`${errors.name.message}`}</p>}
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="email">Email</label>
            <input {...register('email')} type="email" id="email" name="email" required />
            {errors.email && <p>{`${errors.email.message}`}</p>}
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="message">Wiadomość</label>
            <textarea {...register('message')} id="message" name="message" required />
            {errors.message && <p>{`${errors.message.message}`}</p>}
          </div>
          <button type="submit">Wyślij</button>
        </form>
      </div>
    </section>
  );
};
