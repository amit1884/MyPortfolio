import React from "react";
import { Element } from "react-scroll";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import './contact.scss'
function Contact() {
  return (
    <Element name="contact" className="section contact-section">
      <SectionHeading text="Contact" />
    </Element>
  );
}

export default Contact;
