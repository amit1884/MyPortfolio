import React from "react";
import { Element } from "react-scroll";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import './certificates.scss'
function Certificates() {
  return (
    <Element name="certificates" className="section certificate-section">
      <SectionHeading text="Certificates & Achievements" />
   
    </Element>
  );
}

export default Certificates;
