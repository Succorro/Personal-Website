import {Link} from 'react-router-dom'
import { useState } from 'react';
import {Accordion, AccordionItem} from "@nextui-org/accordion";
import HomeSlider from './HomeSlider';
const Home = () => {
  const [devImage, setDevImage] = useState("/Wireframe.jpg")

  function changeImage (key) {
    if(key === 'front'){
      setDevImage('/Wireframe.jpg')
    }else if(key === 'back'){
      setDevImage('/CodeLaptop.jpg')
    }else {
      setDevImage('/EditRentABin1.png')
    }
  }

  function handleClick(key) {
    changeImage(key)
  }

  return (
    <div id='home'   className="mx-10 lg:mx-20 border border-2 border-t-0 border-b-0 min-height-[100rem] text-slate-800">
      <div className="flex-wrap justify-center content-center ">
        <div className="flex  max-md:flex-col max-md:gap-0 min-h-[100vh]">
          <div className="flex flex-col p-8 border-b-2 md:border-r-2">
           <div className="flex flex-col self-stretch my-auto text-xl font-semibold leading-8 max-w-[620px] text-slate-800 max-md:mt-10 max-md:max-w-full">
              <h2 className="max-md:max-w-full">Mobile | Web Development </h2>
              <h1 className="mt-6 text-7xl max-md:max-w-full max-md:text-5xl">
                Software Engineer
              </h1>
              <p className="mt-6 text-lg leading-7 max-md:max-w-full">
                Hi I&apos;m <span className="font-bold text-2xl text-purple">Steven Gutierrez,</span> 
                <br />
                I&apos;m a full-stack developer who enjoys turning ideas into reality through code. Reach out if you&apos;re looking to collaborate or to have a conversation.
              </p>
                <Link to='/contact' className="rounded-3xl mx-auto justify-center items-center py-6 mt-12 max-w-full text-center text-white whitespace-nowrap bg-slate-800 w-[211px] max-md:px-5 max-md:mt-10">
                  Connect With Me
                </Link>
            </div>
          </div>
          <div className="flex flex-col w-full lg:w-[50%] border-b-2 px-10">
            <img
              loading="lazy"
              srcSet="/Profile-Image.jpg"
              className="w-full h-[60vh] object-cover my-10"
            />
            <div className="flex justify-center">
              <a className="m-10" href="https://www.linkedin.com/in/soysteven/" rel="noreferrer" target="_blank">
                <img className="w-10 h-10" src="/linkedin.svg" alt="LinkedIn" />
              </a>
              <a className="m-10" href="mailto:stevengbmv@gmail.com">
                <img className="w-12 h-10" src="/gmail.svg" alt="Email" loading='lazy'/>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row border-b-2 items-center">
        <div className="p-5">
          <p className="text-xl font-bold">Technologies</p>
        </div>
        <div className="w-full border-t-2 md:border-t-0 md:border-l-2 p-5 ">
            <HomeSlider />
        </div>
      </div>

      <div className='border-b-2 w-[100vw] -ml-10'>
        <div className='flex flex-col lg:flex-row'>
          <div className='ml-24 mt-20 lg:ml-32 lg:my-20 lg:w-[40vw]'>
            <img className='w-[500px] lg:w-[30vw] max-h-[400px] object-cover object-center transition ease-in-out delay-1000' src={devImage} alt="" loading='lazy' />
          </div>
          <div className='text-start text-xl font-bold leading-10 m-20 lg:ml-0 lg:my-20 lg:w-[40vw]'>
            <Accordion >
              <AccordionItem title="Front End" onPress={() => handleClick('front')}>
                <li className='font-medium'>UX/UI Design</li>
                <li className='font-medium'>Search Engine Optimization</li>
                <li className='font-medium'>HTML/CSS</li>
                <li className='font-medium'>React JS</li>
              </AccordionItem>
              <AccordionItem title="Back End" onPress={() => handleClick('back')}>
                <li className='font-medium'>Ruby on Rails</li>
                <li className='font-medium'>Relational Database Integration</li>
                <li className='font-medium'>API Development</li>
              </AccordionItem>
              <AccordionItem title="Mobile Development" onPress={() => handleClick('mobile')}>
              <li className='font-medium'>Responsive Design</li>
              <li className='font-medium'>React Native</li>
              <li className='font-medium'>Expo</li>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      <div className='h-10'></div>
    </div>
  );
};

export default Home;

