import { useEffect, useState } from 'react';
import PinnedProjects from './PinnedProjects';
import ProjectsDisplay from './ProjectsDisplay';
// import { Card,CardBody, Image } from '@nextui-org/react';

const Projects = () => {
  const [projects, setProjects] = useState(null);
  const [projectInfo, setProjectInfo] = useState({id: 1 , html_url: 'https://rent-a-bin247.com', imageUrl: '/Rent.jpeg', description: "Waste Management Container Rental Service", name: 'Rent A Bin'})

  const cardStyle = 'w-[250px] h-[275px] m-4'
  const rentABin = [{id: 1 , html_url: 'https://rent-a-bin247.com', description: "Waste Management Container Rental Service", name: 'Rent A Bin'}]

  function handlePopup (project){
    console.log(project)
  }
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Succorro/starred');
        const data = await response.json();
        const allData = rentABin.concat(data)
        setProjects(allData);
      } catch (error) {
        console.error('Error fetching GitHub repositories:', error);
      }
    };

    fetchProjects();
  }, []);
  return (
    <div id='projects' className="h-[175vh] md:h-[100vh] lg:pt-1">
      <section className='not-prose'>
        <div className='flex flex-wrap justify-center '>
          { projects? 
          projects.map((project, index) => (
              <PinnedProjects handlePopup={handlePopup} project={project} key={index} cardStyle={cardStyle}/>
          )) : 
          <></>}
        </div>
      </section>
      <ProjectsDisplay projectInfo={projectInfo}/>
    </div>
  );
};

export default Projects;
