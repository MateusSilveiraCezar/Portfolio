import { useState } from "react";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SocialSidebar from "./components/Sidebar";
import About from "./components/About";
import Certifications from "./components/Certifications";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "about":
        return <About />
      case "projetos":
        return <Projects />;
      case "contato":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <Header setCurrentPage={setCurrentPage} />
      {currentPage === "home" && <SocialSidebar />}
      <main>
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
      </main>
      <Footer />
    </>
  );
}

export default App;
