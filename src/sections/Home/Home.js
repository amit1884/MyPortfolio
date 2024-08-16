import React from "react";
import { Element } from "react-scroll";
import Avatar from "../../assets/images/Amit-without-bg.png";
import "./home.scss";
function Home() {
  return (
    <Element name="home" className="section">
      <div className="home-section">
        <div className="text-content" data-aos="slide-right">
          <div className="main-heading">Amit Raj</div>
          <div className="typing-container">
            <div className="sub-heading typing-text">I am a Software Engineer</div>
          </div>
        </div>
        <div className="my-pic" data-aos="slide-left">
          <img src={Avatar} alt="" className="pic" />
        </div>
        <div className="my-pic-mb" data-aos="slide-left">
          <img src={Avatar} alt="" className="pic" />
        </div>
      </div>
    </Element>
  );
}

export default Home;
