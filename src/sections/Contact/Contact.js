import React from "react";
import { Element } from "react-scroll";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import "./contact.scss";
import { FaEnvelope, FaLocationPin, FaPhone } from "react-icons/fa6";
import GlassCard from "../../components/GlassCard/GlassCard";
import GlassButton from "../../components/Button/GlassButton";
function Contact() {
  return (
    <Element name="contact" className="section contact-section">
      <SectionHeading text="Contact" />
      <div className="row mt-4" style={{display:'flex'}}>
        <div className="col-md-6 col-sm-12">
          <GlassCard>
            <div className="contact-details">
              <div className="contact-icon">
                <FaLocationPin />
              </div>
              <div className="contact-data">
                <div className="contact-lable">Location</div>
                <div className="contact-value">Ranchi, Jharkhand, India</div>
              </div>
            </div>
            <div className="contact-details">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div className="contact-data">
                <div className="contact-lable">Email</div>
                <div className="contact-value">amitraj200raj@gmail.com</div>
              </div>
            </div>
            <div className="contact-details">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <div className="contact-data">
                <div className="contact-lable">Mobile No.</div>
                <div className="contact-value">+91-6205352095</div>
              </div>
            </div>
          </GlassCard>
        </div>
        <div className="col-md-6 col-sm-12">
          <GlassCard>
            <div className="contact-form">
              <div className="form-group mt-2 mb-2">
                <label className="mb-2">Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group mt-2 mb-2">
                <label className="mb-2">Email</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group mt-2 mb-2">
                <label className="mb-2">Subject</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group mt-2 mb-2">
                <label className="mb-2">Message</label>
                <textarea type="text" className="form-control" rows="6" />
              </div>
              <div className="form-group mt-2 mb-2">
               <GlassButton text={'Submit'}/>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </Element>
  );
}

export default Contact;
