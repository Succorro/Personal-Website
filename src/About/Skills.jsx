import SkillsDisplay from "./SkillsDisplay"
// eslint-disable-next-line react/prop-types
function Skills({style, handleBtn}) {
  return (
    <div className={style}>
        <div id='skills' className="bg-gray-800 rounded-lg text-start text-lg font-bold p-5  mt-10 max-w-[85vw] ">
            <div className="flex justify-end">
                <button onClick={()=> handleBtn()} className="border border-2 px-3 py-1 text-md rounded-3xl hover:bg-gray-500">X</button>
            </div>
            <SkillsDisplay/>
        </div>
    </div>
  )
}

export default Skills