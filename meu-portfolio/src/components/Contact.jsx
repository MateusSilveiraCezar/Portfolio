import { useState } from 'react';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch('https://formspree.io/f/xvgqwddq', {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    });

    if (response.ok) {
      setStatus('Mensagem enviada com sucesso!');
      form.reset();
    } else {
      setStatus('Ocorreu um erro. Tente novamente mais tarde.');
    }
  };

  return (
    <section className={styles.contactSection}>
      <h2 className={styles.title}>CONTATO</h2>
      <div className={styles.subtitle}>
        Sinta-se à vontade para entrar em contato preenchendo o formulário abaixo. Responderei o mais breve possível.
      </div>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" name="name" required placeholder="Insira seu nome" />
          </div>
          <div className={styles.field}>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" name="email" required placeholder="Insira seu e-mail" />
          </div>
          <div className={styles.field}>
            <label htmlFor="message">Mensagem</label>
            <textarea id="message" name="message" rows={6} required placeholder="Insira sua mensagem" />
          </div>
          <button type="submit" className={styles.button}>Enviar Mensagem</button>
        </form>
        {status && <p className={styles.status}>{status}</p>}
      </div>
    </section>
  );
}
