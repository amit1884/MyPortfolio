import React from "react";
import "./expirience.scss";
import { Element } from "react-scroll";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import GlassCard from "../../components/GlassCard/GlassCard";
import WorkDetails from "./WorkDetails";
import { workExpirienceData } from "../../constants";
import { FaStar } from "react-icons/fa";
import GlassButton from "../../components/Button/GlassButton";
function WorkExpirience() {
  return (
    <Element name="work-expirience" className="section">
      <div className="section expirience-section">
        <SectionHeading text="Work Expirience" />

        <div className="expirience-container">
          {workExpirienceData?.map((item, index) => {
            return (
              <GlassCard
                customClass={`expirience-card ${
                  index === 0 || index === 2 ? "old-expirience" : ""
                }`}
                aosData="fade-up"
                key={item?.id}
              >
                {item?.current && <div class="corner-tag"></div>}
                <div className="expirience-card-header">
                  <img src={item.logo} alt="" />
                </div>
                <div className="expirience-card-body">
                  <WorkDetails data={item} />
                </div>
                <div className="empty"></div>
                <div className="expirience-card-footer">
                  <GlassButton text="View Details" />
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </Element>
  );
}

export default WorkExpirience;
