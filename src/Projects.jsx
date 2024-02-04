import { useEffect, useState } from 'react';
import PinnedProjects from './PinnedProjects';
import { Card,CardBody, Image } from '@nextui-org/react';

const Projects = () => {
  const [projects, setProjects] = useState(null);
  const cardStyle = 'w-[250px] h-[275px] m-4'
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Succorro/starred');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching GitHub repositories:', error);
      }
    };

    fetchProjects();
  }, []);
  return (
    <div id='projects' className="h-[100vh] lg:pt-1">
      <section className='not-prose'>
        <div className='flex flex-wrap justify-center '>
          <div className={cardStyle}>
              <a href='https://rent-a-bin247.com' target='_blank' rel='noopener noreferrer'>
                <Card 
                isPressable 
                shadow='lg'
                className="w-full bg-gray-200 hover:border-none hover:bg-gray-300  space-y-4 p-4">
                  <CardBody className='overflow-visible p-0'>
                    <Image
                    removeWrapper
                    width='100%'
                    alt="Card background"
                    className="max-h-[120px] w-full "
                    src='/Rent.jpeg' 
                    />
                  </CardBody>
                  <h4 className="text-gray-600 font-bold text-lg">Rent a Bin</h4>
                  <p className="text-gray-600 text-sm font-semibold overflow-auto h-[60px]">Waste Management Container Rental Service</p>
                </Card>
              </a>
          </div>
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
