export function Experience() {
  const experience = [
    {
      year: "Marzo 2025 - Mayo 2025",
      title: "Web Developer Internship",
      institution: "John Weston Group",
      description:
        "Desarrollo de habilidades y conocimientos en desarrollo web. Aquí pude colaborar con el equipo de desarrollo, aprender nuevas herramientas y mejorar mis habilidades como desarrollador web.",
      type: "work",
    },
    {
      year: "2023 - Junio 2025",
      title: "Ciclo Superior de Desarrollo de Aplicaciones Web",
      institution: "IES Ana Luisa Benitez",
      description: "Desarrollo de aplicaciones web Frontend y Backend. Donde aprendí a trabajar con tecnologías como Java, PHP, JavaScript, HTML y CSS, MySQL, PostgreSQL y Git. ",
      type: "education",
    },
    {
      year: "2021 - Junio 2023",
      title: "Grado en Ingeniería Informática",
      institution: "ULPGC",
      description:
        "Dos años de estudios en Ingeniería Informática, con bases en programación, algoritmos, bases de datos y sistemas. No llegué a terminar el grado, pero dí mis primeros pasos en el mundo de la programación y gracias a ello he podido aprender muchas cosas que me han ayudado a crecer como desarrollador.",
      type: "education",
    }
  ];

  const TimelineItem = ({ item }) => (
    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <div className="timeline-header">
          <h3 className="timeline-title">{item.title}</h3>
          <h4 className="timeline-institution">{item.institution}</h4>
          <p className="timeline-year">{item.year}</p>
        </div>
        <div className="timeline-description-container">
          <p className="timeline-description">{item.description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="experience-section" id="experiencia">
      <div className="experience-container">
        <div className="experience-header">
          <h2 className="section-title">Experiencia</h2>
          <div className="title-underline"></div>
        </div>

        <div className="experience-content">
          <div className="experience-column">
            <div className="timeline">
              {experience.map((item, index) => (
                <TimelineItem key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
