import { useEffect, useState } from 'react';
import { Card, CardHeader, Image, Progress } from '@nextui-org/react';

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
            <div key={index} className='w-full md:w-1/2 lg:w-1/3'>
              <div className='mb-10 overflow-hidden rounded-xl bg-background dark:bg-dark-2 py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-14'>
                <Card isPressable className="col-span-12 bg-background sm:col-span-4">
                  <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                    <h4 className="text-cornflowerblue font-bold text-xl">{project.name}</h4>
                  </CardHeader>
                  <Image
                    removeWrapper
                    alt="Card background"
                    className="z-0 w-full h-full bg-background"
                    src="/code.png"  // Replace with project-specific image or use project.image if available
                  />
                  <div className="p-4">
                    <p className="text-gray-500">{project.description}</p>
                    <a
                      href={project.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cornflowerblue mt-4 inline-block underline"
                    >
                      View on GitHub
                    </a>
                  </div>
                </Card>
              </div>
            </div>
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
