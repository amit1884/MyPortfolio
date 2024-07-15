import React from "react";
import "./expirience.scss";
function WorkDescription({ data }) {
  return (
    <div className="expirience-desc-container" data-aos="slide-left">
      <ul>
        {data?.length > 0 &&
          data?.slice(0,3)?.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
      </ul>
    </div>
  );
}

export default WorkDescription;
