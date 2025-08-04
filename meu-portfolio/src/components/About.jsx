import styles from '../styles/About.module.css';

export default function About() {
  return (
    <section id="sobre" className={styles.aboutSection}>
      <h2 className={styles.title}>SOBRE MIM</h2>
      <p className={styles.subtitle}>
        Aqui você encontrará mais informações sobre quem eu sou, o que faço e as tecnologias com as quais trabalho atualmente.
      </p>

      <div className={styles.content}>
        <div className={styles.aboutText}>
          <h3>Conheça um pouco mais sobre mim!</h3>
          <p>
            Sou desenvolvedor web com foco em <strong>Front-end</strong>, especializado na criação de interfaces modernas, responsivas e de alta performance para sites e aplicações. Cofundei a <strong>Mapech</strong>, uma empresa dedicada a soluções digitais como desenvolvimento de sites, automações de processos empresariais e dashboards personalizados para apoiar a tomada de decisões.
          </p>
          <p>
            Tenho experiência prática com tecnologias como <strong>React</strong>, <strong>Node.js</strong>, <strong>n8n</strong> e <strong>Power BI</strong>, sempre buscando entregar valor real por meio da tecnologia. Além da atuação técnica, compartilho aprendizados e boas práticas com a comunidade dev, contribuindo para o crescimento coletivo.
          </p>
          <p>
            Acredito na <strong>evolução constante</strong>, no <strong>trabalho colaborativo</strong> e na <strong>inovação como ferramenta para resolver problemas reais</strong>. Sinta-se à vontade para se conectar comigo no <a href="https://www.linkedin.com/in/mateus-silveira-cezar-b1b92b2b5/" target="_blank" rel="noopener noreferrer">LinkedIn</a> ou explorar alguns dos projetos aqui no portfólio.
          </p>
        </div>

        <div className={styles.skills}>
          <h3>Minhas Skills</h3>
          <div className={styles.skillGrid}>
            {[
              'HTML', 'CSS', 'JavaScript', 'React', 'Node.js',
              'n8n', 'Power BI', 'GIT', 'Github', 'Responsive Design'
            ].map(skill => (
              <span key={skill} className={styles.skillItem}>{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
