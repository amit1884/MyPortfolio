import React from 'react'
import { Element } from 'react-scroll'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import './skills.scss'
function Skills() {
  return (
    <Element name="skills" className="section">
      <div className="skills-section">
        <SectionHeading text="Skills" />
      </div>
    </Element>
  )
}

export default Skills