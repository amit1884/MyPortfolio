import React from "react";
import Avatar from "../../assets/images/Amit.jpg";
import "./navbar.scss";
import { Events, Link, scrollSpy } from "react-scroll";
import { FaBuilding, FaCertificate, FaCode, FaCodepen, FaEnvelope, FaGithub, FaGoogle, FaHome, FaLinkedin, FaProjectDiagram, FaUser } from "react-icons/fa";

function Navbar() {
  React.useEffect(() => {
    Events.scrollEvent.register("begin", function () {
    });

    Events.scrollEvent.register("end", function () {
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <div className="navbar">
      <div className="nav-header">
        <div className="avatar-container">
          <img src={Avatar} alt="Avatar" />
        </div>
        <div className="social-container">
          <a href="mailto:amitraj200raj@gmail.com" className="social-icons" target="_blank"  rel="noreferrer" ><FaGoogle/></a>
          <a href="https://www.linkedin.com/in/amit-raj-ab5a8a181/" className="social-icons" target="_blank"  rel="noreferrer" ><FaLinkedin/></a>
          <a href="https://github.com/amit1884" className="social-icons" target="_blank"  rel="noreferrer" ><FaGithub/></a>
          <a href="https://codepen.io/amit1884/" className="social-icons" target="_blank" rel="noreferrer"  ><FaCodepen/></a>
        </div>
      </div>
      <div className="nav-menu-container">
        {[
          { to: "home", icon: <FaHome />, label: "Home" },
          { to: "about", icon: <FaUser />, label: "About" },
          { to: "work-expirience", icon: <FaBuilding />, label: "Work Experience" },
          { to: "skills", icon: <FaCode />, label: "Skills" },
          { to: "projects", icon: <FaProjectDiagram />, label: "Projects" },
          { to: "certificates", icon: <FaCertificate />, label: "Certificates & Achievements" },
          { to: "contact", icon: <FaEnvelope />, label: "Contact" },
        ].map((item, index) => (
          <div className="menu-item" key={index}>
            <Link
              to={item.to}
              smooth={true}
              duration={500}
              className="menu"
              activeClass="active"
              spy={true}
            >
              <div style={{ marginRight: "20px" }}>
                {item.icon}
              </div>
              <div>{item.label}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
