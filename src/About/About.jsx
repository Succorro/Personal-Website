import {useState} from 'react'
import AboutBio from "./AboutBio"
import Education from "./Education"
import Skills from "./Skills"
import { useEffect } from 'react'


function About() {
    const [imgStyle, setImgStyle] = useState('z-10 transition-all ease-in-out delay-100 duration-100 m-10 opacity-100')
    const initialInformation = {
        about: 'transition-all ease-in-out delay-50 duration-50 opacity-0  ',
        skills: 'transition-all ease-in-out delay-50 duration-50 opacity-0  ',
        education: 'transition-all ease-in-out delay-50 duration-50 opacity-0  ' 
    }
    const [information, setInformation] = useState(initialInformation)
    const [display, setDisplay] = useState('none')
    const [displayContent, setDisplayContent] = useState(<></>)

    function handleImgClick(type){
        setInformation({...initialInformation, [type]: 'transition-all ease-in-out delay-300 duration-1000 opacity-100 z-40 absolute -my-52 sm:-my-32 mx-10 '})
        setImgStyle('z-10 transition-all ease-in-out delay-50 duration-50 opacity-0' )
        setDisplay(type)
    }

    function handleBtn(){
        setImgStyle('z-10 transition-all ease-linear delay-200 duration-300 m-10 opacity-100')
        setInformation(initialInformation)
        setDisplay('')
        setDisplayContent(<></>)
    }

    useEffect(()=>{
         if(display === 'about'){
        setDisplayContent(<AboutBio handleBtn={handleBtn} style={information.about}/>)
    }else if (display === 'skills'){
        setDisplayContent(<Skills handleBtn={handleBtn} style={information.skills}/>)
    }else if (display === 'education'){
        setDisplayContent(<Education handleBtn={handleBtn} style={information.education}/>)
    }  
    },[display])

    return (
        <div id='about' className="p-3 text-white h-[100vh]">
        <div id="image flex" className="flex flex-wrap justify-center w-3/5 lg:w-full lg:mt-10 m-auto">
            <button id='about-skill' onClick={()=> handleImgClick('about')} className={imgStyle}>
                <img className='max-w-[25vw]' src="/man.png" alt="avatar" />
                <div className='-mt-16 font-bold rounded-xl bg-black'>
                    <p className='text-gray-100'>About me</p>
                </div>
            </button>
            <button id='about-skill' onClick={ ()=> handleImgClick('skills')} className={imgStyle}>
                <img className='max-w-[25vw]' src="/web-programming.png" alt="code" />
                <div  className='-mt-16 font-bold rounded-xl bg-black'>
                    <p  className='text-gray-100'>Skills</p>
                </div>
                </button>
            <button id='about-skill' onClick={ ()=> handleImgClick('education')} className={imgStyle}>
                <img className='max-w-[25vw]' src="/Learning.png" alt="education" />
                <div className='-mt-16 font-bold rounded-xl bg-black'>
                    <p className='text-gray-100'>Experience</p>
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