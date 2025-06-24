import React, { useState } from "react";
import GlassCard from "../../components/GlassCard/GlassCard";
import WorkDetails from "./WorkDetails";
import WorkDescription from "./WorkDescription";
import GlassButton from "../../components/Button/GlassButton";

function WorkExpirienceCard({ item, index }) {
  const [openDetails, setOpenDetails] = useState(false);
  return (
    <div className="col-md-6 col-12">
      <GlassCard customClass={`expirience-card `} aosData="fade-up">
        {item?.current && <div class="corner-tag"></div>}
        <div className={"expirience-card-header"}>
          <img
            src={item.logo}
            className={`${
              item?.companyName === "NEWME" ? "small-img" : "big-img"
            }`}
            alt=""
          />
        </div>
        <div className="expirience-card-body">
          {!openDetails ? (
            <div className="expirience-preview">
              <WorkDetails data={item} />
            </div>
          ) : (
            <div className="expirience-details">
              <WorkDescription data={item?.description} />
            </div>
          )}
        </div>
        <div className="empty"></div>
        <div className="expirience-card-footer">
          {!openDetails ? (
            <GlassButton
              text="View Details"
              onClick={() => setOpenDetails(true)}
            />
          ) : (
            <GlassButton text="Go Back" onClick={() => setOpenDetails(false)} />
          )}
        </div>
      </GlassCard>
    </div>
  );
}

export default WorkExpirienceCard;
