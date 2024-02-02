// import React from 'react'

import AboutBio from "./AboutBio"
import Education from "./Education"
import Skills from "./Skills"



function About() {
  return (
    <div id='about' className="p-3 text-white ">

        <AboutBio/>
        <Skills/>
        <Education/>
    </div>
  )
}

export default About