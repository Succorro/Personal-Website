/* eslint-disable react/prop-types */

function ProjectsDisplay({projectInfo}) {
    const {name, description, imageUrl, html_url} = projectInfo
    const links = [html_url, 'link', 'link']
  return (
    <div >
        <div className="border border-4 border-white p-4 flex rounded rounded-xl mx-auto w-[75vw] h-[45vw]">
            <div className="bg-white flex p-2">
                <div id="diplay-left" className="w-full">
                    <img className="w-[35vw]" src={imageUrl} alt="project" />
                    <div id='links' className="mt-8 flex flex-wrap justify-center">
                        {links.map((link, index) => {
                            return <a key={index} className="bg-gray-800 rounded-xl text-white px-3 py-2 m-1" href={link}>Link</a>
                        })}
                    </div>
                </div>
                <div id="display-right" className="  flex flex-col ml-4 w-full">
                    <div className=" flex flex-row">
                        <div className="w-full text-start">
                            <h3 className="font-bold text-sm text-gray-700">Project</h3>
                            <h1 className="font-bold text-2xl text-gray-400">{name}</h1>
                        </div>
                        <button className="border mb-6 px-2 rounded-3xl hover:bg-gray-500">X</button>
                    </div>
                    <div className="ml-0  flex flex-col text-start">
                        <h3 className="font-bold text-sm text-gray-700">About</h3>
                        <p className="font-semibold text-md text-gray-400 h-[21vh] relative overflow-scroll">{description}</p>
                    </div>
                </div>
            </div>
        </div>
        <div id='base'>
            <div id="baselines" className="flex ">
                <div className=" border border-l-0 border-r-4 border-y-0  h-1/2 w-[10vw] p-5 ml-auto mr-2">

                </div>
                <div className=" border border-r-0 border-l-4 border-y-0  h-1/2 w-[10vw] p-5 mr-auto ml-2">

                </div>
            </div>
            <div id='baseplate' className="border border-2 w-[10vw] rounded-xl mx-auto">

            </div>
        </div>
    </div>
  )
}

//onClick={()=> handleBtn()}
export default ProjectsDisplay