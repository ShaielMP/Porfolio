import { useState, useEffect } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detectar scroll para cambiar estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Función para scroll suave a secciones
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-symbol">{"<"}</span>
          <span className="logo-text">Shaiel Montesdeoca Puga</span>
          <span className="logo-symbol">{"/>"}</span>
        </div>

        {/* Desktop Menu */}
        <ul className="navbar-menu desktop-menu">
          <li>
            <a onClick={() => scrollToSection("experiencia")}>Experiencia</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("proyectos")}>Proyectos</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("sobre-mi")}>Sobre mí</a>
          </li>
          <li>
            <button
              className="contact-btn"
              onClick={() => scrollToSection("contacto")}
            >
              Contacto
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a onClick={() => scrollToSection("experiencia")}>Experiencia</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("proyectos")}>Proyectos</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("sobre-mi")}>Sobre mí</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("contacto")}>Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
