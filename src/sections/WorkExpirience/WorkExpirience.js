import React, { useState } from "react";
import "./expirience.scss";
import { Element } from "react-scroll";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import GlassCard from "../../components/GlassCard/GlassCard";
import WorkDetails from "./WorkDetails";
import { workExpirienceData } from "../../constants";
import GlassButton from "../../components/Button/GlassButton";
import WorkDescription from "./WorkDescription";
import WorkExpirienceCard from "./WorkExpirienceCard";
function WorkExpirience() {
  return (
    <Element name="work-expirience" className="section">
      <div className="section expirience-section">
        <SectionHeading text="Work Expirience" />
        <div className="row expirience-container mt-4">
          {workExpirienceData?.map((item, index) => {
            if (item?.type === "full_time")
              return (
                <WorkExpirienceCard item={item} index={index} key={item?.id} />
              );
            else return null;
          })}
        </div>
        <div className="row expirience-container mt-4">
          {workExpirienceData?.map((item, index) => {
            if (item?.type === "internship")
              return (
                <WorkExpirienceCard item={item} index={index} key={item?.id} />
              );
            else return null;
          })}
        </div>
      </div>
    </Element>
  );
}

export default WorkExpirience;
