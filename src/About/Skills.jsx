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
// eslint-disable-next-line react/prop-types
function Skills({style}) {
  return (
    <div className={style}>
        <div id='skills' className="bg-gray-800 rounded-lg text-start text-lg font-bold px-10 my-10 pb-5">
            <ul id="group" className="flex flex-row">
                {skillsArray.map((skill, index) =>{ 
                    return(
                        <SkillsCard key={index} skills={skill}/>
                    )
                    })}        
            </ul>
        </div>
    </div>
  )
}

export default Skills