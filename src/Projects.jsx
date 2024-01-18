import { useEffect, useState } from 'react';
import PinnedProjects from './PinnedProjects';
import { Progress } from '@nextui-org/react';

const Projects = () => {
  const [projects, setProjects] = useState(null);
console.log(projects)
  useEffect(() => {
    // Fetch project data from your GitHub repository
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
    <div id='projects' className="p-3 bg-background h-full">
      <header className="m-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-500">My Projects</h1>
      </header>
      

      <section className='not-prose'>
        <div className='-mx-3 flex flex-wrap justify-center '>
          {projects ? projects.map((project, index) => (
            <PinnedProjects project={project} key={index}/>
          )) : <Progress
          size="lg"
          isIndeterminate
          label="Projects Loading..."
          isStriped
          aria-label="Loading..."
          className="max-w-md text-2xl font-bold text-cornflowerblue"
        />}
        </div>
      </section>
    </div>
  );
};

export default Projects;
