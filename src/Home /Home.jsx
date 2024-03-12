import HomeParagraph from "./HomeParagraph";
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div id='home'   className="p-3 min-height-[100rem] text-slate-800">
      <div className="flex-wrap justify-center content-center px-14 -mt-10 md:py-10 max-md:px-5">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
           <div className="flex flex-col self-stretch my-auto text-xl font-semibold leading-8 max-w-[620px] text-slate-800 max-md:mt-10 max-md:max-w-full">
              <h2 className="max-md:max-w-full">Technology | Web Development </h2>
              <h1 className="mt-6 text-7xl max-md:max-w-full max-md:text-4xl">
                Software Engineer
              </h1>
              <p className="mt-6 text-lg leading-7 max-md:max-w-full">
                Hi I&apos;m <span className="font-bold text-2xl text-purple">Steven Gutierrez,</span> 
                <br />
                I&apos;m a full-stack developer who enjoys turning ideas into reality through code.
              </p>
                <Link to='/contact' className=" rounded-xl mx-auto  justify-center items-center px-16 py-6 mt-12 max-w-full text-center text-white whitespace-nowrap bg-slate-800 w-[211px] max-md:px-5 max-md:mt-10">
                  Contact
                </Link>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="/Profile-Image.jpg"
              className="w-full h-80 object-cover mt-10"
            />
          </div>
        </div>
      </div>

      <header className="m-10" >
        <div className="flex justify-center mb-10">
          <a className="m-10" href="https://www.linkedin.com/in/soysteven/" rel="noreferrer" target="_blank">
            <img className="w-10 h-10" src="/linkedin.svg" alt="LinkedIn" />
          </a>
          <a className="m-10" href="mailto:stevengbmv@gmail.com">
            <img className="w-12 h-10" src="/gmail.svg" alt="Email" />
          </a>
        </div>
      </header>

      <section  className="bg-gray-800 p-10 flex flex-col items-center mb-20 rounded-3xl lg:px-10">
        <HomeParagraph />
        
      </section>
    </div>
  );
};

export default Home;

