import React from "react";
import "./skillrate.scss";
function SkillRate({ rating }) {
  const scale = Array.from({ length: 5 });
  return (
    <div className="skill-scale">
      {scale?.map((item, index) => {
        return (
          <div
            className={`scale ${
              rating >= index + 1 ? "active-scale" : "inactive-scale"
            }`}
          ></div>
        );
      })}
    </div>
  );
}

export default SkillRate;
