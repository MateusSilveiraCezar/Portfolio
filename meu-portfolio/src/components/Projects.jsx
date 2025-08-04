

const projetos = [
  {
    id: 1,
    nome: "Projeto 1",
    descricao: "Descrição breve do projeto 1",
    link: "https://github.com/seuusuario/projeto1"
  },
  {
    id: 2,
    nome: "Projeto 2",
    descricao: "Descrição breve do projeto 2",
    link: "https://github.com/seuusuario/projeto2"
  }
];

export default function Projects() {
  return (
    <section className="projects">
      <h2>Projetos</h2>
      <div className="projects-list">
        {projetos.map(proj => (
          <div key={proj.id} className="project-card">
            <h3>{proj.nome}</h3>
            <p>{proj.descricao}</p>
            <a href={proj.link} target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
}
