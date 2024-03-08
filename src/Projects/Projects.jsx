import { useState } from 'react';
import PinnedProjects from './PinnedProjects';
import ProjectsDisplay from './ProjectsDisplay';
// import { Card,CardBody, Image } from '@nextui-org/react';
import projectsData from '../projectsData';

const Projects = () => {
  const [projectInfo, setProjectInfo] = useState(projectsData[0])
  const [displayStyle, setDisplayStyle] = useState(' -z-50 transition transition-all ease-in-out delay-200 duration-1000 opacity-0 -translate-y-[200vh]')
  const [sectionStyle, setSectionStyle] = useState('z-10 transition transition-all ease-in-out delay-200 duration-1000 opacity-100 flex items-center justify-center')

  const cardStyle = 'w-[250px] h-[200px]'

  function handlePopup (project){
    setProjectInfo(project)
    setDisplayStyle('z-20 transition transition-all ease-in-out delay-200 duration-1000 opacity-100 -translate-y-[90vh] sm:-translate-y-[85vh] md:-translate-y-[85vh] lg:-translate-y-[85vh]')
    setSectionStyle('-z-50 transition transition-all ease-in-out delay-200 duration-1000 opacity-0 flex items-center justify-center')
  }

  function handleBtn(){
    setDisplayStyle('-z-50 transition transition-all ease-in-out delay-200 duration-1000 opacity-0 -translate-y-[200vh]')
    setSectionStyle('z-10 transition transition-all ease-in-out delay-200 duration-1000 opacity-100 flex items-center justify-center')
  }
  return (
    <div id='projects' className="h-[120vh] md:h-[100vh] lg:pt-1 z-10">
      <section className="flex justify-center items-center px-16 py-20 bg-white max-md:px-5">
      <div className="flex flex-col mt-8 w-full max-w-[1170px] max-md:max-w-full">
        <h1 className="self-center text-5xl font-bold tracking-tight text-center whitespace-nowrap leading-[52.08px] text-violet-950">
          My Projects
        </h1>
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              {projectsData.map((project) => (
                <div key={project.id} className="flex flex-col grow py-9 pr-20 pl-8 rounded-none border-2 border-gray-200 border-solid max-md:px-5 max-md:mt-8 max-md:max-w-full">
                  <img src={project.image} alt="" />
                  <h1 className="text-2xl font-medium leading-8 text-violet-950 max-md:max-w-full">
                    {project.name}
                  </h1>
                  <p className="mt-5 text-base leading-7 text-slate-900 text-opacity-40 max-md:max-w-full">
                    {project.about}
                  </p>
                  <p className="mt-7 text-sm font-bold leading-7 text-indigo-600 uppercase tracking-[2px] max-md:max-w-full">
                    {project.technologies.map((tech, index) => (
                      <p key={index}>{tech}</p>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
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
