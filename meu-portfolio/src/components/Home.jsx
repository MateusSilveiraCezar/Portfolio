import SocialSidebar from './Sidebar';
import styles from '../styles/Home.module.css';
import download from '../assets/download.png';

export default function Home() {
  return (
    <section className={styles.homeSection}>
      <SocialSidebar />
      <div className={styles.homeContent}>
        <h1>OLÁ! EU SOU O MATEUS SILVEIRA CEZAR</h1>
        <p>
          Desenvolvedor focado em resultados, construindo soluções modernas com
          React, Node.js e automações que geram impacto real.
        </p>
        <a href="/MateusSilveiraCezar_Curriculo.pdf" download className={styles.downloadLink}>
          <button>
            <img src={download} alt="load" />
            Download CV
          </button>
        </a>
      </div>
    </section>
  );
}
