import React from "react";
import { Element } from "react-scroll";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import GlassCard from "../../components/GlassCard/GlassCard";
import "./skills.scss";
import { skills } from "../../constants";
import SkillRate from "./SkillRate";

function Skills() {
  return (
    <Element name="skills" className="section">
      <div className="skills-section">
        <SectionHeading text="Skills" />
        <div className="row" style={{ marginTop: "30px" }}>
          <div className="col-md-12 col-sm-12">
            <GlassCard customClass={" mt-4"}>
              <div className="skill-heading">Programming Languages</div>
              <div className="row flex-center">
                {skills.languages?.map((skill, index) => {
                  return (
                    <div
                      className="col-md-2 col-sm-6 flex-center "
                      style={{ width: "auto" }}
                    >
                      <SkillRate skill={skill} />
                    </div>
                  );
                })}
              </div>
            </GlassCard>
          </div>
          <div className="col-md-12 col-sm-12">
            <GlassCard customClass={"mt-4"}>
              <div className="skill-heading">Frameworks and Technologies</div>
              <div className="row flex-center">
                {skills.framework?.map((skill, index) => {
                  return (
                    <div
                      className="col-md-2 col-sm-6 "
                      style={{ width: "auto" }}
                    >
                      {" "}
                      <SkillRate skill={skill} />
                    </div>
                  );
                })}
              </div>
            </GlassCard>
          </div>
          {/* <div className="col-md-4 col-sm-12">
            <GlassCard customClass={"mt-4"}>
              <div className="skill-header">Frameworks</div>
              <div className="skills">
                <div className="skill-container">
                  <img src={ReactLogo} alt="" />
                  <SkillRate rating={4} />
                </div>
                <div className="skill-container">
                  <img src={CPPLogo} alt="" />
                  <SkillRate rating={3} />
                </div>
                <div className="skill-container">
                  <img src={JSLogo} alt="" />
                  <SkillRate rating={4} />
                </div>
              </div>
            </GlassCard>
          </div> */}
          {/* <div className="col-md-4 col-sm-12">
            <GlassCard customClass={"mt-4"}>
              <div className="skill-header">Developer Tools</div>
              <div className="skills">
                <div className="skill-container">
                  <img src={CLogo} alt="" />
                  <SkillRate rating={3} />
                </div>
                <div className="skill-container">
                  <img src={CPPLogo} alt="" />
                  <SkillRate rating={3} />
                </div>
                <div className="skill-container">
                  <img src={JSLogo} alt="" />
                  <SkillRate rating={4} />
                </div>
              </div>
            </GlassCard>
          </div> */}
        </div>
      </div>
    </Element>
  );
}

export default Skills;
