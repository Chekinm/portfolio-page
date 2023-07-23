import projectsData from "./projectsData.json";
import ProjectCard from "./ProjectCard";


const Projects = () => {
  return (
    <article id="projects">
        {projectsData.projects.map((project) => (
          <ProjectCard key={project.id} className="mb-3" project={project} />
        ))}
      
    </article>
  )
}

export default Projects