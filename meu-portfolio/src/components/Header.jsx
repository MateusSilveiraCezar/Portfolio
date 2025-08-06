import styles from "../styles/Header.module.css";
import foto from "../assets/mateus.jpg";

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={foto} alt="Logo" className={styles.logo} />
      <span className={styles.name}>MATEUS SILVEIRA CEZAR</span>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li><a href="#home">HOME</a></li>
          <li><a href="#sobre">SOBRE</a></li>
          <li><a href="#projetos">PROJETOS</a></li>
          <li><a href="#certificações">CERTIFICADOS</a></li>
          <li><a href="#contato">CONTATO</a></li>
        </ul>
      </nav>
    </header>
  );
}
