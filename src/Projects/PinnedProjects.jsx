import projectsData from "../projectsData"

function PinnedProjects() {
  return (
        <div className="max-md:max-w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-md:flex-col max-md:gap-5">
            {projectsData.map((project) => (
              <div key={project.id} className="flex flex-col">
                <div className="flex flex-col grow py-0 rounded-none border-2 border-gray-200 border-solid">
                  <img src={project.image} alt="" className="object-cover w-full h-60 md:h-auto md:max-h-80" />
                  <h1 className="text-2xl font-medium leading-8 text-slate-800">
                    {project.name}
                  </h1>
                  <p className="mt-5 text-base leading-7 text-slate-900 text-opacity-40 px-1">
                    {project.about}
                  </p>
                  <p className="mt-7 text-sm px-5 font-bold leading-7 text-indigo-600 uppercase tracking-[2px]">
                    {project.technologies.map((tech, index) => (
                      <span key={index}>{tech}</span>
                    ))}
                  </p>
                  <div id='links' className="mt-8 mb-3 flex flex-wrap lg:flex-col justify-center h-[7vh] sm:h-[15vh] relative overflow-scroll">
                        {project.links.map((link, index) => {
                            return <a key={index} className="bg-gray-800 rounded-xl font-bold text-white m-1 px-4 py-2 max-h-[5vh]" href={link.url}>{link.name}</a>
                        })}
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
  )
}

export default PinnedProjects