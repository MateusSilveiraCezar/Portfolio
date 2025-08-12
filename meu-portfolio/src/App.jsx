import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SocialSidebar from "./components/Sidebar";
import About from "./components/About";
import Certifications from "./components/Certifications";
import ProjetoDetalhado from "./pages/ProjetoDetalhado";
import ScrollTopButton from "./components/scrollTopButton";

export default function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target;
      if (target.tagName === "A") {
        const href = target.getAttribute("href");
        // Só intercepta links que começam com "#" (hash interno)
        if (href && href.startsWith("#")) {
          e.preventDefault();
          const id = href.slice(1); // remove o "#"
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
            // Atualiza o hash na URL sem reload da página
            window.history.pushState(null, "", href);
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return (
    <>
      <Header />
      {isHome && <SocialSidebar />}
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="home">
                  <Home />
                </section>

                <section id="sobre">
                  <About />
                </section>

                <section id="projetos">
                  <Projects />
                </section>

                <section id="certificações">
                  <Certifications />
                </section>

                <section id="contato">
                  <Contact />
                </section>
              </>
            }
          />
          <Route path="/projetos/:id" element={<ProjetoDetalhado />} />
        </Routes>
      </main>
      <ScrollTopButton />
      <Footer />
    </>
  );
}
