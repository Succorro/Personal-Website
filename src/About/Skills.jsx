import SkillsDisplay from "./SkillsDisplay"
// eslint-disable-next-line react/prop-types
function Skills({style, handleBtn}) {
  return (
    <div className={style}>
        <div id='skills' className="bg-White rounded-lg text-start text-black text-lg font-bold p-5  mt-10 max-w-[90vw] ">
            <div className="flex justify-end">
                <button onClick={()=> handleBtn()} className="border border-2 border-black px-3 py-1 text-md rounded-3xl bg-black text-white hover:border-slate-500 hover:bg-slate-500 transition ease-in-out delay-100">X</button>
            </div>
            <SkillsDisplay/>
        </div>
    </div>
  )
}

export default Skills