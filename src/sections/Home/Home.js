import React from "react";
import { Element } from "react-scroll";
import Avatar from "../../assets/images/main.png";
import "./home.scss";
import TypingText from "../../components/TypingEffect/TypingEffect";
function Home() {
  return (
    <Element name="home" className="section">
      <div className="home-section">
        <div className="text-content" data-aos="slide-right">
          <div className="main-heading">Amit Raj</div>
         <TypingText/>
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
