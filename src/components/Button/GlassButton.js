import React from "react";
import './button.scss'
function GlassButton({ text, onClick }) {
  return (
    <button onClick={onClick && onClick} className="glass-btn">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {text}
    </button>
  );
}

export default GlassButton;
