
function ProjectsDisplay() {
  return (
    <div >
        <div className="border border-4 border-white p-4 flex justify-between rounded rounded-xl mx-auto w-[75vw] h-[45vw]">
            <div id="diplay-left">
                <img className="w-[35vw]" src="/Rent.jpeg" alt="project" />
                <div id='links'>
                    <a href="">link</a>
                    <a href="">link</a>
                    <a href="">link</a>
                </div>
            </div>
            <div id="display-right">
                <div>
                    <h3></h3>
                    <h1></h1>
                    <button></button>
                </div>
                <div>
                    <h3></h3>
                    <p>kk</p>
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

export default ProjectsDisplay