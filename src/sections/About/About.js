import React from "react";
import { Element } from "react-scroll";
import "./about.scss";
import GlassCard from "../../components/GlassCard/GlassCard";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
function About() {
  return (
    <Element name="about" className="section">
      <div className="about-section">
        <SectionHeading text="About" />
        <GlassCard customClass={"about-text"}>
          <p className="about-content">
            I am a dedicated software development professional with 2 years of
            experience, holding a B.Tech degree in Computer Science and
            Engineering from NIT Jamshedpur. My expertise primarily lies in
            frontend development, where I excel in utilizing various
            cutting-edge technologies to create dynamic and user-friendly
            interfaces. In addition to my frontend prowess, I have a strong
            interest in backend technologies, allowing me to maintain a
            well-rounded skill set in software development. I am passionate
            about continuously learning and adapting to new advancements in the
            field to deliver high-quality solutions.
          </p>
        </GlassCard>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="personal-details-header">Education Details</div>
              <GlassCard>
                <div className="personal-details">
                  <span>
                    <b>University Name: </b> NIT Jamshedpur
                  </span>
                </div>
                <div className="personal-details">
                  <span>
                    <b>Degree: </b> Bachelor's in Technology (B.Tech)
                  </span>
                </div>
                <div className="personal-details">
                  <span>
                    <b>Graduation Year: </b> 2022
                  </span>
                </div>
                <div className="personal-details">
                  <span>
                    <b>CGPA: </b> 8.29
                  </span>
                </div>
              </GlassCard>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="personal-details-header">Employment Details</div>
              <GlassCard>
                <div className="personal-details">
                  <span>
                    <b>Current Company: </b> Think and Learn Pvt. Ltd - (Byju's)
                  </span>
                </div>
                <div className="personal-details">
                  <span>
                    <b>Fulltime Expirience: </b> 2 Years 1 Month
                  </span>
                </div>
                <div className="personal-details">
                  <span>
                    <b>Internship Expirience: </b> 9 Months
                  </span>
                </div>
                <div className="personal-details">
                  <span>
                    <b>Current Location: </b> Ranchi, Jharkhand
                  </span>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default About;
