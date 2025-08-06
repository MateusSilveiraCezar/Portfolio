import styles from '../styles/Certificados.module.css';

const certificados = [
  {
    titulo: "Desenvolvimento Web com React",
    instituicao: "Alura",
    data: "Julho de 2025",
    link: "https://exemplo.com/certificado-react"
  },
  {
    titulo: "Node.js e Express",
    instituicao: "Rocketseat",
    data: "Maio de 2025",
    link: "https://exemplo.com/certificado-node"
  },
  // Adicione mais certificados conforme necessário
];

export default function Certifications() {
    return (
       <section className={styles.certificados}>
        <h2>Certificados</h2>
        <p className={styles.subtitulo}>Alguns dos cursos e certificações que concluí</p>
        <div className={styles.grid}>
            {certificados.map((cert, index) => (
            <div key={index} className={styles.card}>
                <h3>{cert.titulo}</h3>
                <p><strong>Instituição:</strong> {cert.instituicao}</p>
                <p><strong>Data:</strong> {cert.data}</p>
                {cert.link && (
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className={styles.botao}>
                    Ver certificado
                </a>
                )}
            </div>
            ))}
        </div>
        </section>
    )
}