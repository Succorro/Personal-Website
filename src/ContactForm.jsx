

function ContactFrom() {

    function handleSubmit(e){
        e.persist();
        e.preventDefault();
    }
  return (
    <form onSubmit={(e)=>handleSubmit(e)} className="flex flex-col p-12 mt-10 text-sm leading-7 bg-gray-200 rounded-xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <label className="uppercase text-violet-950 tracking-[2px]">
            e-mail
        </label>
        <input className="justify-center items-start py-5 pr-16 pl-6 mt-5 text-lg font-medium leading-6 whitespace-nowrap bg-white border-2 border-solid border-[color:var(--Colors-Grey,#EBEAED)] rounded-[100px] text-slate-900 text-opacity-40 max-md:px-5"/>
        <label className="mt-10 uppercase text-violet-950 tracking-[2px] max-md:mt-10">
            message
        </label>
        <input className="items-start pt-5 pr-16 pb-28 pl-5 mt-5 text-lg font-medium leading-6 bg-white rounded-xl border-2 border-solid border-[color:var(--Colors-Grey,#EBEAED)] text-slate-900 text-opacity-40 max-md:pr-5 max-md:pb-10"/>
        <label className="mt-10 uppercase text-violet-950 tracking-[2px]">
            name
        </label>
        <div className="flex gap-2.5 justify-between mt-5 mb-3.5 text-lg font-medium leading-6 whitespace-nowrap">
            <div className="flex flex-col flex-1 justify-center text-slate-900 text-opacity-40">
            <input className="justify-center items-start py-5 pr-16 pl-6 bg-white border-2 border-solid border-[color:var(--Colors-Grey,#EBEAED)] rounded-[100px] max-md:px-5"/>
            </div>
            <div className="flex flex-col justify-center text-center text-white basis-0">
            <button className="justify-center px-6 py-5 bg-slate-800 rounded-[100px] max-md:px-5 hover:bg-slate-500 transition ease-in-out duration-100">
                Send
            </button>
            </div>
        </div>
    </form>
  )
}

export default ContactFrom