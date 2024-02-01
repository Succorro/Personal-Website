import SkillsCard from "./SkillsCard"

const skillsArray = [
    {
        skill: "React", 
        image: '/react.svg', 
        text: 'JavaScript library that allows for an imperative approach to creating dynamic applications.'
    },
    {skill: "JavaScript", image: '/javascript.svg', text: ''},
    {skill: "Ruby", image: '/ruby.svg', text: ''},
    {skill: "Ruby on Rails", image: '/rails.svg', text: ''},
    {skill: "Tailwind CSS", image: '/tailwind.svg', text: ''},
    {skill: "Redux", image: '/redux.svg', text: ''}
]
function Skills() {
  return (
    <div id='skills' className="">
            <h1 className="font-bold text-2xl">Skills</h1>
            <ul id="group" className="flex flex-col sm:grid sm:grid-cols-3 ">
                {skillsArray.map((skill, index) =>{ 
                    return(
                        <SkillsCard key={index} skills={skill}/>
                    )
                    })}        
            </ul>
            
        </div>
  )
}

export default Skills