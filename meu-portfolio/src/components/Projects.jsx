import styles from '../styles/Projects.module.css';

const projetos = [
  {
    id: 'projeto1',
    nome: "Mapech",
    descricao: "Site criado para minha empresa com o objetivo de apresentar nossos serviços e facilitar o contato com os clientes.",
    link: "https://www.mapech.com.br",
    imagem: "/mapech.png",
    botaoTexto: "Ver Projeto"
  },
  {
    id: 'projeto2',
    nome: "Ventura",
    descricao: "Site criado para a empresa Ventura com o objetivo de organizar os processos de locação e facilitar a comunicação entre a equipe e os funcionários responsáveis por cada etapa.",
    link: "",
    imagem: "/ventura.png",
    botaoTexto: "Ver Projeto"
  },
  {
    id: 'projeto3',
    nome: "Weather Sense",
    descricao: "Projeto criado para fornecer dados de previsão do tempo de forma simples e eficiente, utilizando a API da OpenWeatherMap em uma interface intuitiva.",
    link: "",
    imagem: "/weather-sense.png",
    botaoTexto: "Ver Projeto"
  },
];

export default function Projects() {
  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.title}>PROJETOS</h2>
      <p className={styles.subtitle}>
        Aqui você encontrará alguns dos projetos pessoais e para clientes que eu criei, com cada projeto contendo seu próprio estudo de caso.
      </p>
      {projetos.map((proj) => (
        <div key={proj.id} className={styles.projectContainer}>
          <div className={styles.imageWrapper}>
            <div className={styles.notebookFrame}>
              <img src="/notebookFrame.png" alt="Moldura notebook" className={styles.frame} />
              <img src={proj.imagem} alt={proj.nome} className={styles.content} />
            </div>
          </div>
          <div className={styles.textWrapper}>
            <h3>{proj.nome}</h3>
            <p>{proj.descricao}</p>
            <a
              href={`/projetos/${proj.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              {proj.botaoTexto}
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}
