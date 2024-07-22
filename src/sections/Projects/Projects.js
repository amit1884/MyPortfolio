import React, { useState } from "react";
import { Element } from "react-scroll";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import "./projects.scss";
import { projectsList } from "../../constants";
import TabContainer from "../../components/Tabs/TabContainer";
import ProjectCard from "./ProjectCard";
function Projects() {
  const [activeTab, setActiveTab] = useState(projectsList[0]);
  const onTabChange = (tab) => {
    console.log(tab);
    setActiveTab(tab);
  };
  return (
    <Element name="projects" className="section">
      <div className="project-section">
        <SectionHeading text="Projects" />
        <div className="portfolio-container mt-4">
          <div className="row">
            <TabContainer
              tabs={projectsList}
              onTabChange={onTabChange}
              activeTab={activeTab}
            >
              <div className="row">
                {activeTab?.projects?.map((project, _) => {
                  return (
                    <div className="col-md-4 col-12" key={project?.id}>
                      <ProjectCard project={project} />
                    </div>
                  );
                })}
              </div>
            </TabContainer>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Projects;
