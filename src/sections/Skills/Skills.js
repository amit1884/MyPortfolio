import React from "react";
import { Element } from "react-scroll";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import GlassCard from "../../components/GlassCard/GlassCard";
import CLogo from "../../assets/images/skils/C_Logo.png";
import CPPLogo from "../../assets/images/skils/cpp.png";
import JSLogo from "../../assets/images/skils/js.webp";
import ReactLogo from '../../assets/images/skils/react-native.png'
import "./skills.scss";
import SkillRate from "../../components/SkillRate/SkillRate";

function Skills() {
  return (
    <Element name="skills" className="section">
      <div className="skills-section">
        <SectionHeading text="Skills" />
        <div className="row" style={{ marginTop: "30px" }}>
          <div className="col-md-4 col-sm-12">
            <GlassCard customClass={"mt-4"}>
              <div className="skill-header">Programming Languages</div>
              <div className="skills">
                <div className="skill-container">
                  <p className="skill-name"><b>C</b></p>
                  <SkillRate rating={3} />
                </div>
                <div className="skill-container">
                <b>C++</b>
                  <SkillRate rating={3} />
                </div>
                <div className="skill-container">
                <b>Javascript</b>
                  <SkillRate rating={4} />
                </div>
              </div>
            </GlassCard>
          </div>
          <div className="col-md-4 col-sm-12">
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
          </div>
          <div className="col-md-4 col-sm-12">
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
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Skills;
