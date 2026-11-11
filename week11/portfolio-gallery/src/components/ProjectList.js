import ProjectCard from './ProjectCard';

function ProjectList({ projects }) {
  if (projects.length === 0) {
    return <p className="empty">No projects use this technology yet.</p>;
  }

  return (
    <div className="project-list">
      {projects.map(p => (
        <ProjectCard
          key={p.id}
          title={p.title}
          description={p.description}
          tech={p.tech}
          github={p.github}
          demo={p.demo}
        />
      ))}
    </div>
  );
}

export default ProjectList;
