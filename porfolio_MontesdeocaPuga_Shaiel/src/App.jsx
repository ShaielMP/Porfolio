import "./styles/App.css";
import "./styles/navbar.css";
import "./styles/experience.css";
import { Navbar } from "./components/Navbar.jsx";
import { Experience } from "./components/Experience.jsx";

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
              <span className="subtitle-line"></span>
            </div>
          </div>

          <div className="hero-info">
            <div className="hero-profile-pic">
              <img
                src="/public/images/shaiel.webp"
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

        <div className="scroll-indicator">
          <div className="scroll-circle">
            <span>Scroll</span>
            <span>down</span>
          </div>
        </div>
      </section>

      <Experience />

      <section className="temp-section" id="proyectos">
        <h2>Proyectos</h2>
        <p>Esta sección se desarrollará próximamente...</p>
      </section>

      <section className="temp-section" id="sobre-mi">
        <h2>Sobre mí</h2>
        <p>Esta sección se desarrollará próximamente...</p>
      </section>

      <section className="temp-section" id="contacto">
        <h2>Contacto</h2>
        <p>Esta sección se desarrollará próximamente...</p>
      </section>
    </div>
  );
}

export default App;
