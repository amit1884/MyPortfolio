import React from "react";
import "./glasscard.scss";
function GlassCard({ children, customClass, aosData = "" }) {
  return <div className={`glass-card ${customClass}`} data-aos={aosData}>{children}</div>;
}

export default GlassCard;
