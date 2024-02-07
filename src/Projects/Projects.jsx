import { useState } from 'react';
import PinnedProjects from './PinnedProjects';
import ProjectsDisplay from './ProjectsDisplay';
// import { Card,CardBody, Image } from '@nextui-org/react';
import projectsData from '../projectsData';

const Projects = () => {
  const [projectInfo, setProjectInfo] = useState({
    id: 1,
    name: "Rent A Bin",
    about: "Waste Management Container Rental Service",
    image: "/Rent.jpeg",
    links: [
      {
        name: "Website",
        url: "https://rent-a-bin247.com/",
      },
    ],
  },)

  const [sectionStyle, setSectionStyle] = useState('z-10 transition-all ease-in-out delay-200 opacity-100 flex items-center justify-center')
  const [displayStyle, setDisplayStyle] = useState(' -z-50 transition-all ease-in-out delay-300 opacity-0 -translate-y-[1000vh]')

  const cardStyle = 'w-[250px] h-[200px]'

  function handlePopup (project){
    setProjectInfo(project)
    setDisplayStyle('z-20 transition-all ease-in-out delay-300 opacity-100 -translate-y-[90vh] sm:-translate-y-[85vh] md:-translate-y-[85vh] lg:-translate-y-[85vh]')
    setSectionStyle('-z-50 transition-all ease-in-out delay-200 opacity-0 flex items-center justify-center')
  }

  function handleBtn(){
    setDisplayStyle('-z-50 -translate-y-[1000vh] transition-all ease-in-out delay-300 opacity-0')
    setSectionStyle('z-10 transition-all ease-in-out delay-200 opacity-100 flex items-center justify-center')
  }
  return (
    <div id='projects' className="h-[120vh] md:h-[100vh] lg:pt-1 z-10">
      <section className={sectionStyle}>
        <div className='grid grid-cols-2 gap-10'>
          { projectsData? 
          projectsData.map((project, index) => (
              <PinnedProjects handlePopup={handlePopup} project={project} key={index} cardStyle={cardStyle}/>
          )) : 
          <></>}
        </div>
      </section>
      <ProjectsDisplay handleBtn={handleBtn} displayStyle={displayStyle} projectInfo={projectInfo}/>
    </div>
  );
};

export default Projects;
