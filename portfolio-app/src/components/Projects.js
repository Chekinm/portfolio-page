import projectsData from "./projectsData.json";
import ProjectCard from "./ProjectCard";
import { v4 as uuidv4 } from 'uuid';


const Projects = () => {
  return (
    <article id="projects">

      
        {projectsData.projects.map((project) => (
          <ProjectCard key={uuidv4()} className="mb-3" project={project} />
        ))}
      
    </article>
  )
}

export default Projects