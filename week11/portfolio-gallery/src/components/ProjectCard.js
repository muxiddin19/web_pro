function ProjectCard({ title, description, tech, github, demo }) {
  return (
    <article className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>

      <ul className="tech-list">
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>

      <div className="links">
        <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={demo} target="_blank" rel="noopener noreferrer">Live demo</a>
      </div>
    </article>
  );
}

export default ProjectCard;
