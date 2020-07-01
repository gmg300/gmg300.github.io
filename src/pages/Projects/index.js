import React from "react";
import "./style.css";
import API from "../../utils/API";
import Project from '../../components/Project';

function Projects() {
  const projects = API.getProjects();
  return (
    <div className="container">
      <div className="title"
          data-aos="fade-right"
          data-aos-easing="ease-in-out-back"
          data-aos-duration="800">
          THE WORK
      </div>
      <section id="projects" className="row">
      {projects.map((project,i) => {
        return <Project 
            img={project.img}
            title={project.title}
            description={project.description}
            repo={project.repo}
            page={project.page}
            key={i}
            delay={i * 100 + 1200}
        />
      })}
      </section>
    </div>
  );
}

export default Projects;
