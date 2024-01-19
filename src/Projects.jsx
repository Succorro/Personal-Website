import { useEffect, useState } from 'react';
import PinnedProjects from './PinnedProjects';
import ProjectSkeleton from './ProjectSkeleton';

const Projects = () => {
  const [projects, setProjects] = useState(null);
console.log(projects)
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
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-500">My Projects</h1>
      </header>
      <section className='not-prose'>
        <div className='flex flex-wrap justify-center '>
          {projects ? projects.map((project, index) => (
            <PinnedProjects project={project} key={index}/>
          )) : <ProjectSkeleton/>}
        </div>
      </section>
    </div>
  );
};

export default Projects;
