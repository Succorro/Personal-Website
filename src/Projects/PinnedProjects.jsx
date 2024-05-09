import projectsData from "../projectsData"

function PinnedProjects() {
  const displayProjects = projectsData.map((project) => (
    <div key={project.id} className="flex flex-col m-5">
      <div className="h-[55vh] flex flex-col grow py-0 rounded-none border-2 border-gray-200 border-solid">
        <img src={project.image} alt="project" className="object-cover w-full" style={{height: '19vh'}} />
        <h1 className="mt-3 text-2xl font-medium leading-8 text-slate-800">
          {project.name}
        </h1>
        <p className="mt-1 text-base leading-7 text-slate-700 px-1 max-h-[14vh] md:max-h-[10vh] overflow-scroll">
          {project.about}
        </p>
        <p className="mt-5 text-sm px-5 font-bold leading-7 text-indigo-600 uppercase tracking-[1px]">
          {project.technologies.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </p>
        <div id='links' className="mt-5 mb-0 flex flex-wrap  justify-center  relative overflow-scroll">
              {project.links.map((link, index) => {
                  return <a key={index} className="bg-gray-800 rounded-xl font-bold text-white m-1 px-4 py-2 max-h-[5vh]" href={link.url}>{link.name}</a>
              })}
          </div>
      </div>
    </div>
  ))
  return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-md:flex-col max-md:gap-5">
            {displayProjects}
          </div>
  )
}

export default PinnedProjects