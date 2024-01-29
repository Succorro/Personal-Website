// import React from 'react'

function About() {
  return (
    <div id='about'>
        <div id='bio' className={divStyle}>
            <h1>Whoami</h1>
            <p></p>
        </div>
        <div id='skills' className={divStyle}>
            <h1>Front End</h1>
            <img src="" alt="" />
            <h1> Back End </h1>
            <img src="" alt="" />
        </div>
        <div id='experience ' className={divStyle}>
            <h1>Experience/Education</h1>
        </div>
    </div>
  )
}
const divStyle = 'bg-background m-10'
export default About