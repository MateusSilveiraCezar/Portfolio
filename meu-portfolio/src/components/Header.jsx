import { useState } from "react";
import styles from "../styles/Header.module.css";
import foto from "../assets/mateus.jpg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <img src={foto} alt="Logo" className={styles.logo} />
      <span className={styles.name}>MATEUS SILVEIRA CEZAR</span>

      {/* Ícone do menu hambúrguer */}
      <div
        className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
        onClick={toggleMenu}
      >
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>

      <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
        <ul className={styles.menu}>
          <li><a href="/#home">HOME</a></li>
          <li><a href="/#sobre">SOBRE</a></li>
          <li><a href="/#projetos">PROJETOS</a></li>
          <li><a href="/#certificações">CERTIFICADOS</a></li>
          <li><a href="/#contato">CONTATO</a></li>
        </ul>
      </nav>
    </header>
  );
}
