// import React from 'react'

function About() {
  return (
    <div id='about' className="p-3 text-white bg-cornflowerblue">
        <div id='bio' className="bg-gray-800 rounded-lg text-start text-lg font-bold px-10 my-10 pb-5">
            <h1 className="text-gray-300 underline decoration-2 decoration-background py-5">Whoami</h1>
            <p className="mb-5 text-gray-300"> 
                Hi, I&apos;m Steven, a full stack web developer with a passion for creating clean, functional, and user-friendly web applications. 
                I am always looking for innovative ways to bring my clients vision to life, while adhering to best practices.
            </p>
            <p className="mb-5 text-gray-300">
                As the son of two immigrant parents I understand the value of hard work and dedication to one&apos;s craft. 
                I have a passion for learning about new technologies and applying my skills to my code. 
                My love for gaming and sports has taught me the value of teamwork, strategic thinking, and problem-solving. 
                My background in retail has taught me how to communicate effectively, adapt to new environments, and how to manage my time under tight deadlines. 
                These are skills that can tranfer to any work environment.
                With a strong foundation in technology and a genuine love for learning, I am committed to making a meaningful contribution to any organization that values innovation and continuous growth.
            </p>
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
const divStyle = 'bg-background mb-10'
export default About