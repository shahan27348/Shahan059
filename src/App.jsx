import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Service";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Skills from "./components/skills/Skills";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section id="About me">
        <Parallax type="About me" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Skills">
        <Parallax type="Skills" />
      </section>
      <section >
        <Skills/>
      </section>
      <div id="Projects">
        <Portfolio />
      </div>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
