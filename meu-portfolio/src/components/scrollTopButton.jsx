import { useEffect, useState } from "react";
import styles from "../styles/ScrollTopButton.module.css";

export default function ScrollTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300); // volta ao normal após animação

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`${styles.scrollTop} ${isVisible ? styles.show : ""} ${
        isClicked ? styles.clicked : ""
      }`}
      onClick={scrollToTop}
    >
      ↑
    </button>
  );
}
