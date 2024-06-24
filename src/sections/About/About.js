import React from "react";
import { Element } from "react-scroll";
import "./about.scss";
import GlassCard from "../../components/GlassCard/GlassCard";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
function About() {
  return (
    <Element name="about" className="section">
      <div className="about-section">
       <SectionHeading text="About"/>
        <GlassCard customClass={"about-text"}>
          <p className="about-content">
            I am a software development professional with 2 years of experience,
            holding a B.Tech degree in Computer Science and Engineering from NIT
            Jamshedpur. My expertise lies in frontend development, and I am
            proficient in various related technologies. Additionally, I have a
            keen interest in backend technologies, showcasing a well-rounded
            skill set in the field of software development.
          </p>
        </GlassCard>
      </div>
    </Element>
  );
}

export default About;
