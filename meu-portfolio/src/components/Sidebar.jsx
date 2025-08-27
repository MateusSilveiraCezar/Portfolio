import styles from '../styles/Sidebar.module.css';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope} from 'react-icons/fa';

export default function SocialSidebar() {
  return (
    <div className={styles.sidebar}>
      <a href="https://www.linkedin.com/in/mateus-silveira-cezar-b1b92b2b5/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      <a href="https://github.com/MateusSilveiraCezar" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      <a href="https://www.instagram.com/mat.eusscz/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      <a href="/#contato"><FaEnvelope /></a>
    </div>
  );
}
