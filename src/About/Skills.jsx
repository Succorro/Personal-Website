import Carousel from "./Carousel"

// eslint-disable-next-line react/prop-types
function Skills({style, handleBtn}) {
  return (
    <div className={style}>
        <div id='skills' className="bg-gray-800 rounded-lg text-start text-lg font-bold p-5  mt-10 max-w-[85vw] ">
            <div className="flex justify-between">
                <h1 className="text-gray-300 underline decoration-2 decoration-background py-5">Skills</h1>
                <button onClick={()=> handleBtn()} className="border my-5 px-2 rounded-3xl hover:bg-gray-500">X</button>
            </div>
            <Carousel />
        </div>
    </div>
  )
}

export default Skills