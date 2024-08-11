import React from "react";
import './skills.scss'
import GlassCard from "../../components/GlassCard/GlassCard";
function SkillRate({ skill }) {
  return (
    <GlassCard customClass="skill-rate">
      <div className="overlay">
        <div className="skill-score">{skill?.score}</div>
      </div>
      <div className="skill-name">{skill?.name}</div>
    </GlassCard>
  );
}

export default SkillRate;
