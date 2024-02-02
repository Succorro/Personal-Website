import { useEffect, useState } from 'react';
import PinnedProjects from './PinnedProjects';
import ProjectSkeleton from './ProjectSkeleton';
import { Card,CardBody, Image } from '@nextui-org/react';

const Projects = () => {
  const [projects, setProjects] = useState(null);
  
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
    <div id='projects' className="p-3">
      <header className="m-10">
        <h1 className="text-3xl font-bold text-white">Projects</h1>
      </header>
      <section className='not-prose'>
        <div className='flex flex-wrap m-0 justify-center '>
          <div className='w-full md:w-3/6 lg:w-2/6'>
                    <div className='sm:ml-16 sm:mr-16 md:ml-10 md:mr-0 lg:ml-5 lg:mr-5'>
                        <a href='https://rent-a-bin247.com' target='_blank' rel='noopener noreferrer'>
                            <Card 
                            isPressable 
                            isBlurred
                            shadow='lg'
                            className="w-full bg-gray-200 lg:h-[380px] hover:border-none hover:bg-gray-300 space-y-5 p-6 mb-10">
                                <CardBody className='overflow-visible p-0'>
                                    <Image
                                    removeWrapper
                                    width='100%'
                                    alt="Card background"
                                    className="z-0 w-full"
                                    src='/Rent.jpeg' 
                                    />
                                </CardBody>
                                <h4 className="text-gray-600 font-bold text-xl">Rent a Bin</h4>
                                <div className="">
                                    <p className="text-gray-600 font-semibold">Waste Management Container Rental Service</p>
                                        
                                </div>
                            </Card>
                        </a>
                    </div>
                </div>
                {projects ? 
                projects.map((project, index) => (
                    <PinnedProjects project={project} key={index}/>
                )) : 
                <ProjectSkeleton/>}
        </div>
      </section>
    </div>
  );
};

export default Projects;
