import React from "react";
import { Element } from "react-scroll";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import GlassCard from "../../components/GlassCard/GlassCard";
import AnchantoCerti from "../../assets/certificates/AnchantoInternshipCompletionCertificate_page-0001.jpg";
import CollegeduniaCerti from "../../assets/certificates/collegeduniaCerti_page-0001.jpg";
import AndroidCerti from "../../assets/certificates/Android_Developement_Udemy_Certificate_page-0001.jpg";
import ProblemSolvingBasic from "../../assets/certificates/problem-solving.png";
import ProblemSolvingInter from "../../assets/certificates/problem-solving-adv.png";
import PCONCerti from '../../assets/certificates/AmitRajPCON_page-0001.jpg'
import consoleLogCerti from '../../assets/certificates/Console.log(Replicate)_Third_page-0001.jpg'
import WebTeamCerti from '../../assets/certificates/Amit RAj_WebTeam.jpg'
import SqlBasic from "../../assets/certificates/sql-basic.png";
import JavascriptCerti from '../../assets/certificates/JavacriptCerti.png'
import HtmlCerti from '../../assets/certificates/HTML_Certi.png'
import "./certificates.scss";
import SlickCarousel from "../../components/SlickCarousel/SlickCarousel";

function Certificates() {
  return (
    <Element name="certificates" className="section certificate-section">
      <SectionHeading text="Certificates & Achievements" />
      <div
        className="row mt-4"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="col-md-4 col-sm-12 ">
          <GlassCard>
            <div className="certificate-container">
              <img src={AnchantoCerti} alt="" className="certificate-img" />
            </div>
          </GlassCard>
        </div>
        <div className="col-md-4 col-sm-12 ">
          <GlassCard>
            <div className="certificate-container">
              <img src={CollegeduniaCerti} alt="" className="certificate-img" />
            </div>
          </GlassCard>
        </div>
      </div>
      <div className="row mt-4">
        {/* Hackerrank */}
        <div className="col-md-4 col-sm-12 ">
          <SlickCarousel>
            <GlassCard>
              <div className="certificate-container">
                <img
                  src={ProblemSolvingBasic}
                  alt=""
                  className="certificate-img"
                />
              </div>
            </GlassCard>
            <GlassCard>
              <div className="certificate-container">
                <img
                  src={ProblemSolvingInter}
                  alt=""
                  className="certificate-img"
                />
              </div>
            </GlassCard>
            <GlassCard>
              <div className="certificate-container">
                <img src={SqlBasic} alt="" className="certificate-img" />
              </div>
            </GlassCard>
          </SlickCarousel>
        </div>
        {/* Udemy */}
        <div className="col-md-4 col-sm-12 ">
          <SlickCarousel>
            <GlassCard>
              <div className="certificate-container">
                <img
                  src={JavascriptCerti}
                  alt=""
                  className="certificate-img"
                />
              </div>
            </GlassCard>
            <GlassCard>
              <div className="certificate-container">
                <img
                  src={HtmlCerti}
                  alt=""
                  className="certificate-img"
                />
              </div>
            </GlassCard>
            <GlassCard>
              <div className="certificate-container">
                <img src={AndroidCerti} alt="" className="certificate-img" />
              </div>
            </GlassCard>
          </SlickCarousel>
        </div>
        {/* College */}
        <div className="col-md-4 col-sm-12 ">
          <SlickCarousel>
            <GlassCard>
              <div className="certificate-container">
                <img
                  src={consoleLogCerti}
                  alt=""
                  className="certificate-img"
                />
              </div>
            </GlassCard>
            <GlassCard>
              <div className="certificate-container">
                <img
                  src={PCONCerti}
                  alt=""
                  className="certificate-img"
                />
              </div>
            </GlassCard>
            <GlassCard>
              <div className="certificate-container">
                <img src={WebTeamCerti} alt="" className="certificate-img" />
              </div>
            </GlassCard>
          </SlickCarousel>
        </div>
      </div>
    </Element>
  );
}

export default Certificates;
