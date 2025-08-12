import { useParams } from "react-router-dom";
import projetos from "../data/projetos";
import styles from "../styles/ProjetoDetalhado.module.css";

export default function ProjetoDetalhado() {
    const { id } = useParams();
    const projeto = projetos.find((p) => p.id === id);

    if (!projeto) return <p> Projeto não encontrado.</p>

    return (
        <section className={styles.projeto}>
            <div className={styles.capaContent}>
                <h1 className={styles.h1}>{projeto.titulo}</h1>
                <p>{projeto.resumo}</p>
                <a 
                    href={projeto.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.link}
                >
                    Acessar Projeto
                </a>
            </div>
            <div className={styles.detalhes}>
                <div className={styles.notebookFrame}>
                    <img src="/notebookFrame.png" alt="notebook-frame" className={styles.frame}/>
                    <img src={projeto.imagem} alt="img-projeto" />
                </div>
                <h2>Visão Geral do Projeto</h2>
                <div dangerouslySetInnerHTML={{ __html: projeto.texto }} />
                
                <h2>Ferramentas Utilizadas</h2>
                <div className={styles.skillGrid}>
                    {projeto.tecnologias
                    .map(skill => (
                        <span key={skill} className={styles.skillItem}>{skill}</span>
                    ))}
                </div>
                <h2>Links</h2>
                <div className={styles.links}>
                    <a
                        href={projeto.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projetoBtn}
                    >
                        Link do Projeto
                    </a>
                    <a href="/" className={styles.voltarBtn}>
                        Voltar
                    </a>
                </div>
            </div>
        </section>
    );
}