import { useState } from "react";
import styles from '../styles/Certificados.module.css';

const certificados = [
  {
    titulo: "Inglês Avançado",
    instituicao: "ILAC",
    data: "Julho de 2023",
    imagem: "/inglesCertificado.jpg"
  },
  {
    titulo: "Formação Socail e Sustentabilidade",
    instituicao: "FIAP",
    data: "Março de 2024",
    imagem: "nanoFiapSocial.jpg"
  },
   {
    titulo: "Node.js e Express",
    instituicao: "Rocketseat",
    data: "Maio de 2025",
    imagem: "https://exemplo.com/certificado-node.jpg"
  },
];

export default function Certifications() {
  const [modalAberto, setModalAberto] = useState(false);
  const [imagemModal, setImagemModal] = useState(null);

  const abrirModal = (imagem) => {
    setImagemModal(imagem);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setImagemModal(null);
  };

  return (
    <section className={styles.certificados}>
      <div className={styles.container}>
        <h2 className={styles.titulo}>CERTIFICADOS</h2>
        <p className={styles.subtitulo}>
          Abaixo estão alguns dos cursos e certificações que concluí recentemente:
        </p>

        <div className={styles.grid}>
          {certificados.map((cert, index) => (
            <article 
              key={index} 
              className={styles.card} 
              onClick={() => abrirModal(cert.imagem)}
            >
              <div className={styles.thumbWrapper}>
                <img src={cert.imagem} alt={cert.titulo} className={styles.thumb} />
              </div>
              <div className={styles.cardInfo}>
                <h3>{cert.titulo}</h3>
                <p>{cert.instituicao}</p>
                <span>{cert.data}</span>
              </div>
            </article>
          ))}
        </div>

        {modalAberto && (
          <div className={styles.modalOverlay} onClick={fecharModal}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
              <button onClick={fecharModal} className={styles.modalClose}>✕</button>
              <img src={imagemModal} alt="Certificado" className={styles.modalImage} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
