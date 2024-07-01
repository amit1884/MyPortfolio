import React from "react";
import "./expirience.scss";
function WorkDescription({ data }) {
  return (
    <div className="expirience-desc-container" data-aos="slide-left">
      <ul>
        {data?.length > 0 &&
          data?.map((item, index) => {
            return <li>{item}</li>;
          })}
      </ul>
    </div>
  );
}

export default WorkDescription;
