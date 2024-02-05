import { useEffect, useState } from 'react';
import PinnedProjects from './PinnedProjects';
// import { Card,CardBody, Image } from '@nextui-org/react';

const Projects = () => {
  const [projects, setProjects] = useState(null);
  const cardStyle = 'w-[250px] h-[275px] m-4'
  const rentABin = [{id: 1 , html_url: 'https://rent-a-bin247.com', description: "Waste Management Container Rental Service", name: 'Rent A Bin'}]
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
    <div id='projects' className="h-[150vh] md:h-[100vh] lg:pt-1">
      <section className='not-prose'>
        <div className='flex flex-wrap justify-center '>
          { projects? 
          projects.map((project, index) => (
              <PinnedProjects project={project} key={index} cardStyle={cardStyle}/>
          )) : 
          <></>}
        </div>
      </section>
    </div>
  );
};

export default Projects;
