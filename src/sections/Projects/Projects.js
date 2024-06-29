import React from "react";
import { Element } from "react-scroll";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import './projects.scss'
function Projects() {
  return (
    <Element name="projects" className="section">
      <div className="project-section">
        <SectionHeading text="Projects" />
      </div>
    </Element>
  );
}

export default Projects;
