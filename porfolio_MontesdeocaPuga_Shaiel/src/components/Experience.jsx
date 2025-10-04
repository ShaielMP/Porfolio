export function Experience() {
  const education = [
    {
      year: "2023 - Junio 2025",
      title: "Ciclo Superior de Desarrollo de Aplicaciones Web",
      institution: "IES Ana Luisa Benitez",
      description: "Desarrollo de aplicaciones web Frontend y Backend.",
      type: "education",
    },
    {
      year: "2021 - Junio 2023",
      title: "Grado en Ingeniería Informática",
      institution: "ULPGC",
      description:
        "Dos años de estudios en Ingeniería Informática, con bases en programación, algoritmos, bases de datos y sistemas.",
      type: "education",
    },
  ];

  const work = [
    {
      year: "Marzo 2025 - Mayo 2025",
      title: "Web Developer Internship",
      institution: "John Weston Group",
      description:
        "Desarrollo de habilidades y conocimientos en desarrollo web.",
      type: "work",
    },
  ];

  const TimelineItem = ({ item }) => (
    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <span className="timeline-year">{item.year}</span>
        <h3 className="timeline-title">{item.title}</h3>
        <h4 className="timeline-institution">{item.institution}</h4>
        <p className="timeline-description">{item.description}</p>
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
            <div className="column-header">
              <div className="header-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3b82f6"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-school"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
                  <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
                </svg>
              </div>
              <h3>Educación</h3>
            </div>
            <div className="timeline">
              {education.map((item, index) => (
                <TimelineItem key={index} item={item} />
              ))}
            </div>
          </div>

          <div className="experience-column">
            <div className="column-header">
              <div className="header-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3b82f6"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-briefcase"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                  <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
                  <path d="M12 12l0 .01" />
                  <path d="M3 13a20 20 0 0 0 18 0" />
                </svg>
              </div>
              <h3>Experiencia Laboral</h3>
            </div>
            <div className="timeline">
              {work.map((item, index) => (
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
