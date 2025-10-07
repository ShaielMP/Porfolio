import "./styles/App.css";
import "./styles/navbar.css";
import "./styles/experience.css";
import "./styles/projects.css";
import "./styles/about.css";
import { Navbar } from "./components/Navbar.jsx";
import { Experience } from "./components/Experience.jsx";
import { TechCarousel } from "./components/TechCarousel.jsx";
import { Projects } from "./components/Projects.jsx";
import { AboutMe } from "./components/AboutMe.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hola,
              <br /> soy Shaiel
            </h1>
            <div className="hero-subtitle">
              <span className="subtitle-line">
                Desarrollador web apasionado por crear experiencias digitales
                funcionales y atractivas. Especializado en frontend con React y
                siempre aprendiendo nuevas tecnologías.
              </span>
            </div>
          </div>

          <div className="hero-info">
            <div className="hero-profile-pic">
              <img
                src="/images/shaiel.webp"
                alt="Shaiel Montesdeoca Puga profile picture"
              />
            </div>

            <div className="social-links">
              <p>
                <strong>GitHub:</strong> @ShaielMP
              </p>
              <p>
                <strong>LinkedIn:</strong> /Shaiel Montesdeoca Puga
              </p>
              <p>
                <strong>Email:</strong> montesdeocapuga.shaiel@gmail.com
              </p>
            </div>
          </div>
        </div>

        <TechCarousel />
      </section>

      <Experience />

      <Projects />

      <AboutMe />

      <footer className="footer">
        <p>
          &copy; 2025 Shaiel. Casi todos los derechos
          reservados.
        </p>
        <div className="footer-info">
          <a href="https://github.com/ShaielMP">
            <i className="devicon-github-original"></i>
          </a>
          <a href="mailto:montesdeocapuga.shaiel@gmail.com">Contacto</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
