// import React from 'react'

import AboutCard from "./AboutCard"
const credit = ['<a href="https://www.flaticon.com/free-icons/react" title="react icons">React icons created by Putra Arif Munazar - Flaticon</a>','<a href="https://www.flaticon.com/free-icons/javascript" title="javascript icons">Javascript icons created by Freepik - Flaticon</a>', 
'<a href="https://www.flaticon.com/free-icons/ruby" title="ruby icons">Ruby icons created by Freepik - Flaticon</a>',
''
 ]
const skillsArray = [
    {
        skill: "React", 
        image: '/science.png', 
        text: 'JavaScript library that allows for an imperative approach to creating dynamic applications.'
    },
    {skill: "JavaScript", image: '/js.png', text: ''},
    {skill: "Ruby", image: '/ruby.png', text: ''},
    {skill: "Ruby on Rails", image: '/rails-1.svg', text: ''},
    {skill: "Tailwind CSS", image: '/tailwind-css-2.svg', text: ''},
    {skill: "Redux", image: '/redux.svg', text: ''}
]

function About() {
  return (
    <div id='about' className="p-3 text-white bg-cornflowerblue">
        <div id='bio' className="bg-gray-800 rounded-lg text-start text-lg font-bold px-10 my-10 pb-5">
            <h1 className="text-gray-300 underline decoration-2 decoration-background py-5">About me</h1>
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
        <div id='skills' className="">
            <h1 className="font-bold text-2xl">Skills</h1>
            <ul id="group" className="flex flex-col sm:grid sm:grid-cols-3 ">
                {skillsArray.map((skill, index) =>{ 
                    return(
                        <AboutCard key={index} skills={skill}/>
                    )
                    })}        
            </ul>
            
        </div>
        <div id='experience ' className={divStyle}>
            <h1>Experience/Education</h1>
        </div>
    </div>
  )
}
const divStyle = 'bg-background mb-10'
export default About