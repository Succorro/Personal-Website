import Carousel from "./Carousel"

// eslint-disable-next-line react/prop-types
function Skills({style, handleBtn}) {
  return (
    <div className={style}>
        <div id='skills' className="bg-gray-800 rounded-lg text-start text-lg font-bold p-5 mt-10 max-w-[85vw] ">
            <div className="flex justify-end mb-0">
                <button onClick={()=> handleBtn()} className="border px-2 rounded-3xl hover:bg-gray-500">X</button>
            </div>
            <Carousel/>
        </div>
    </div>
  )
}

export default Skills