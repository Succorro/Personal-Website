/* eslint-disable react/prop-types */

function ProjectsDisplay({projectInfo, displayStyle, handleBtn}) {
    const {name,image, about,links,} = projectInfo
  return (
    <div className={displayStyle}>
        <div className="border border-4 bg-white border-white p-2 flex rounded rounded-xl mx-auto w-[80vw] h-[45vw] lg:w-[60vw] lg:h-[35vw]">
            <div className="bg-white flex p-3 rounded-xl lg:p-5">
                <div id="diplay-left" className="w-full">
                    <img className="w-[35vw]" src={image} alt="project" />
                    <div id='links' className="mt-8 flex flex-wrap lg:flex-col justify-center h-[7vh] sm:h-[15vh] relative overflow-scroll">
                        {links.map((link, index) => {
                            return <a key={index} className="bg-gray-800 rounded-xl text-white px-3 py-2 m-1 max-h-[5vh]" href={link.url}>{link.name}</a>
                        })}
                    </div>
                </div>
                <div id="display-right" className="  flex flex-col ml-4 w-full">
                    <div className=" flex flex-row lg:mb-10">
                        <div className="w-full text-start ">
                            <h3 className="font-bold text-sm text-gray-700 lg:text-lg lg:mb-3">Project</h3>
                            <h1 className="font-bold text-2xl text-gray-400 lg:text-3xl">{name}</h1>
                        </div>
                        <button onClick={()=> handleBtn()} className="border border-2 mb-6 px-2 rounded-3xl h-[4vh] hover:bg-gray-500">X</button>
                    </div>
                    <div className="ml-0  flex flex-col text-start">
                        <h3 className="font-bold text-sm text-gray-700 lg:text-lg lg:mb-3">About</h3>
                        <p className="font-semibold text-md text-gray-400 lg:text-2xl h-[8vh] sm:h-[21vh] relative overflow-scroll">{about}</p>
                    </div>
                </div>
            </div>
        </div>
        <div id='base'>
            <div id="baselines" className="flex">
                <div className=" border border-white border-l-4 border-r-4 border-y-0  h-1/2 w-[1vw] px-2 bg-white py-5 mx-auto">

                </div>
            </div>
            <div id='baseplate' className="border border-2 w-[10vw] rounded-xl mx-auto">

            </div>
        </div>
    </div>
  )
}

export default ProjectsDisplay