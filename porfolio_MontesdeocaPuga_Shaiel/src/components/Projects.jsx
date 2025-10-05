export function Projects() {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "Description of Project 1",
      image: "project1.jpg",
      technologies: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/ShaielMP/project1",
      demo: "https://project1.netlify.app"
    },
    {
      id: 2,
      title: "Project 2",
      description: "Description of Project 2",
      image: "project2.jpg",
      technologies: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/ShaielMP/project2",
      demo: "https://project2.netlify.app"
    },
    {
      id: 3,
      title: "Project 3",
      description: "Description of Project 3",
      image: "project3.jpg",
      technologies: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/ShaielMP/project3",
      demo: "https://project3.netlify.app"
    },
  ];

  return (
    <section className="projects-section" id="proyectos">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="section-title">Mis proyectos</h2>
          <div className="title-underline"></div>
          <p className="section-description">
            Algunos de los proyectos en los que he trabajado
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`project-card ${project.featured ? "featured" : ""}`}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="overlay-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <i className="devicon-github-original"></i>
                      <span>Código</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link demo"
                    >
                      <span>🚀</span>
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <p>¿Quieres ver más proyectos?</p>
          <a 
            href="https://github.com/ShaielMP" 
            target="_blank" 
            rel="noopener noreferrer"
            className="github-button"
          >
            <i className="devicon-github-original"></i>
            Ver GitHub completo
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
