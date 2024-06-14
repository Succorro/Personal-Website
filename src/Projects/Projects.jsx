import PinnedProjects from './PinnedProjects';
const Projects = () => {
  return (
    <div id='projects' className="lg:pt-1 z-10">
      <section className="flex justify-center items-center px-16 mt-5 bg-white max-md:px-5">
        <div className="flex flex-col mt-0 mx-10 w-full max-w-[1170px] max-md:max-w-full">
          <h1 className=" mb-10 self-center text-5xl font-bold tracking-tight text-center whitespace-nowrap leading-[52.08px] text-slate-800">
            Projects
          </h1>
          <PinnedProjects/>
        </div>
      </section>
    </div>
  );
};

export default Projects;
