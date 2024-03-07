import {useState} from 'react'

function ContactFrom() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);
    const [status, setStatus] = useState(false)
    function handleSubmit(e){
        e.persist();
        e.preventDefault();
        setIsSubmitting(true)

        const { elements } = e.target;
        console.log(e.target.value)
        console.log(elements)
        const data = {};
        const inputsLength = elements.length;

        for (let i = 0; i < inputsLength; i++) {
            const input = elements[i];
            if (input.name && input.name !== '_gotcha' && Object.prototype.hasOwnProperty.call(input, 'value')) {
                data[input.name] = input.value;
            }
        } 
        console.log(data)
        fetch("https://public.herotofu.com/v1/7b59ca60-d841-11ee-8b86-efa11e5770a0", {
            method: 'POST', 
            headers: {
                Accept: 'applicaiton/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then((r) => {
            if(r.status !== 200 ){
                setStateMessage('Something went wrong, please try again')
                setIsSubmitting(false);
                setTimeout(() => {
                    setStateMessage(null);
                  }, 5000); 
                throw new Error(r.statusText)
            } else {
                setStateMessage('Message sent successfully!')
                setIsSubmitting(false);
                setTimeout(() => {
                    setStateMessage(null);
                    }, 5000); 
                }
            return r.json();
        })
        .then(()=>setStatus(true))
        .catch((err) => console.log(err.toString()))

        //clear form 
        e.target.reset();
    }

    if(status) {
       return (
        <>
            <div className='text-lg'>
                Thank you!
            </div>
            <div className='text-md'>
                I&apos;ll be in touch soon.
            </div>
        </>
       )
    }
  return (
    <form 
    action="https://public.herotofu.com/v1/7b59ca60-d841-11ee-8b86-efa11e5770a0"
    method='POST'
    onSubmit={handleSubmit} 
    className="flex flex-col p-12 mt-10 text-sm leading-7 bg-gray-200 rounded-xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
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
                <input className="justify-center px-6 py-5 bg-slate-800 rounded-[100px] max-md:px-5 hover:bg-slate-500 hover:cursor-pointer transition ease-in-out duration-100" type="submit" value="Send" disabled={isSubmitting}/>
                <div style={{ textIndent: '-99999px', whiteSpace: 'nowrap', overflow: 'hidden', position: 'absolute' }} aria-hidden="true">
                    <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" />
                </div>
            </div>
        </div>
        {stateMessage && <p>{stateMessage}</p>}
    </form>
  )
}

export default ContactFrom