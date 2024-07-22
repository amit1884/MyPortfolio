import React from "react";
import GlassCard from "../../components/GlassCard/GlassCard";
import SlickCarousel from "../../components/SlickCarousel/SlickCarousel";
import "./projects.scss";
function ProjectCard({ project }) {
  return (
    <GlassCard customClass={"mt-4"}>
      <div className="project-card-header">
        <SlickCarousel>
          {project?.screenshots?.map((item, index) => {
            return (
              <div key={index} className="slide">
                <img
                  src={item}
                  alt=""
                  style={{ width: "100%", height: "170px" }}
                />
              </div>
            );
          })}
        </SlickCarousel>
      </div>
      <div className="project-card-details">
        <div className="project-desc">{project?.description}</div>
        <table>
          <tr>
            <th>Source Code: </th>
            <td>
              <a href={project?.github} target="_blank" rel="noreferrer">
                {project?.title}
              </a>
            </td>
          </tr>
          <tr>
            <th>Deployed Link: </th>
            <td>
              <a href={project?.deployed} target="_blank" rel="noreferrer">
                {project?.deployed}
              </a>
            </td>
          </tr>
          <tr>
            <th>Tech Stack: </th>
            <td>{project?.techStack.join(', ')}</td>
          </tr>
        </table>
      </div>
    </GlassCard>
  );
}

export default ProjectCard;
