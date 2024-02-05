import {useState} from 'react'
import AboutBio from "./AboutBio"
import Education from "./Education"
import Skills from "./Skills"
import { useEffect } from 'react'


function About() {
    const [imgStyle, setImgStyle] = useState('z-10 transition-all ease-in-out delay-200 m-10 opacity-100')
    const initialInformation = {
        about: 'transition-all ease-in-out delay-200 opacity-0  ',
        skills: 'transition-all ease-in-out delay-200 opacity-0  ',
        education: 'transition-all ease-in-out delay-200 opacity-0  ' 
    }
    const [information, setInformation] = useState(initialInformation)
    const [display, setDisplay] = useState('none')
    const [displayContent, setDisplayContent] = useState('')

    function handleImgClick(type){
        setInformation({...initialInformation, [type]: 'transition-all ease-in-out delay-200 opacity-100 z-40 absolute -my-52 sm:-my-32 mx-10 '})
        setImgStyle('z-10 transition-all ease-in-out delay-200 opacity-0' )
        console.log(information)
        setDisplay(type)
    }

    function handleBtn(){
        setImgStyle('z-10 transition-all ease-linear delay-200 duration-0 m-10 opacity-100')
        setInformation(initialInformation)
        setDisplay('')
    }

    useEffect(()=>{
         if(display === 'about'){
        setDisplayContent(<AboutBio handleBtn={handleBtn} style={information.about}/>)
    }else if (display === 'skills'){
        setDisplayContent(<Skills handleBtn={handleBtn} style={information.skills}/>)
    }else {
        setDisplayContent(<Education handleBtn={handleBtn} style={information.education}/>)
    }  
    },[display])

    
    return (
        <div id='about' className="p-3 text-white h-[100vh] ">
        <div id="image flex" className="flex flex-wrap justify-center w-3/5 lg:w-full lg:mt-10 m-auto">
            <button id='btn' onClick={()=> handleImgClick('about')} className={imgStyle}>
                <img src="/man.png" alt="avatar" />
                <div className='z-20 -mt-16 font-bold border bg-color opacity-0 hover:opacity-100 hover:bg-color focus:bg-color transition-all ease-linear duration-0 hover:ease-out hover:duration-1000 hover:delay-100 delay-1000'>
                    <p className=''>About me</p>
                </div>
            </button>
            <button onClick={ ()=> handleImgClick('skills')} className={imgStyle}>
                <img src="/web-programming.png" alt="code" />
                <div className='z-20 -mt-16 font-bold border bg-color opacity-0 hover:opacity-100 hover:bg-color focus:bg-color transition-all ease-linear duration-0 hover:ease-out hover:duration-1000 hover:delay-100 delay-1000'>
                    <p className=''>Skills</p>
                </div>
                </button>
            <button onClick={ ()=> handleImgClick('education')} className={imgStyle}>
                <img src="/Learning.png" alt="education" />
                <div className='z-20 -mt-16 font-bold border bg-color opacity-0 hover:opacity-100 hover:bg-color focus:bg-color transition-all ease-linear duration-0 hover:ease-out hover:duration-1000 hover:delay-100 delay-1000'>
                    <p className=''>Experience</p>
                </div>
            </button>
        </div>
        <div className='flex justify-center'>
        {displayContent}
        </div>
    </div>
  )
}


export default About