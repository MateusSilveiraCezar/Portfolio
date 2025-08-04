import { FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from '../styles/Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <h2>Mateus Silveira Cezar</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero excepturi rem recusandae repellendus aliquam? Mollitia delectus, provident nihil, error repellat soluta aut vel nostrum laboriosam cumque optio temporibus. Itaque, enim?</p>
            </div>
            <div>
                <h2>Social</h2>
                <a href="https://linkedin.com/in/seulinkedin" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="https://github.com/seugithub" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            </div>
            <span>© Copyright 2025. Made by <a href="#">Mateus Cezar</a></span>
        </footer>
    );
}
