import React from "react";
import './sectionheading.scss'
function SectionHeading({text}) {
  return (
    <div className="section-heading" data-aos="fade-up">
      <p>{text}</p>
      <div className="underline"></div>
    </div>
  );
}

export default SectionHeading;
