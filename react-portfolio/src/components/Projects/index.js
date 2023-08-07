import React from "react";
import { ProjectMenu } from "./projectmenu";
const Projects = () => {
  return (
    <div id="projects" className="">
      <div className="container">
        <div className="mt-5 ">
          <h2 className="text-center text-white">My Projects </h2>
          <h4 className="text-center text-white">
            Here are some of my works that I have dedicated my time, skills,
            and effort into.
          </h4>
        </div>
        <div className="row mt-5 ">
          {ProjectMenu.map((project, i) => {
            return (
              <div
                className="col-sm-6 col-md-6 card border-0 mt-3 bg-dark"
                key={project.name}
              >
                <img
                  className=""
                  src={require(`../../assets/images/${project.image}.jpg`)}
                  width={"70%"}
                  height={"60%"}
                  alt={project.name}
                ></img>
                <div className="card-body">
                  <p className="card-text  text-white">{project.description}</p>
                  <a href={project.url} className="btn btn-primary me-2 ms-3">
                    <i className="bi bi-link">View</i>
                  </a>
                  <a
                    href={project.github}
                    className="btn btn-secondary ms-4 me-2"
                  >
                    <i className="bi bi-github">Github</i>
                  </a>
                </div>
                <div className="card-bodu text-white">
                  <p className="w-75">{project.technology}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;