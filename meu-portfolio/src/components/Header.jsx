import styles from "../styles/Header.module.css";
import foto from "../assets/mateus.jpg";

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={foto} alt="Logo" className={styles.logo} />
      <span className={styles.name}>Mateus Silveira Cezar</span>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li><a href="#home">Home</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#certificações">Certificados</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}
