import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope} from 'react-icons/fa';
import styles from '../styles/Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <h2>Mateus Silveira Cezar</h2>
                <p>Um Desenvolvedor Web Full Stack, responsável por construir tanto o Frontend quanto o Backend de Sites e Aplicações Web, entregando soluções completas e eficientes que impulsionam o sucesso do produto como um todo.</p>
            </div>
            <div>
                <h2>Social</h2>
                <a href="https://linkedin.com/in/seulinkedin" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="https://github.com/seugithub" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://www.instagram.com/mat.eusscz/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="mailto:mateussilveiracezar08@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
            </div>
            <span>© Copyright 2025. Made by <a href="#">Mateus Cezar</a></span>
        </footer>
    );
}
