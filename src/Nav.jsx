import  { useState } from "react";
import { Link } from "react-router-dom";

const initialState = {
  home: "text-slate-800 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-lg sm:text-xl font-bold transition-color duration-100 underline decoration-2 decoration-background",
  about: "text-slate-800 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-lg sm:text-xl font-bold transition-color duration-100",
  projects: "text-slate-800 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-lg sm:text-xl font-bold transition-color duration-100",
  contact: "text-slate-800 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-lg sm:text-xl font-bold transition-color duration-100",
};

// eslint-disable-next-line react/prop-types
function Nav() {
  const [state, setState] = useState(initialState);

  function handleClick(link) {
    let updatedState;
    if(link !== 'home') {
      updatedState = {
        ...initialState, 
        [link]: initialState[link] + " underline decoration-2 decoration-background",
        home: "text-slate-800 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-lg sm:text-xl font-bold transition-color duration-100"
      }
    } else {
      updatedState = {...initialState, [link]: initialState[link] + " underline decoration-2 decoration-background"}
    }
    setState(updatedState);
  } 

  return (
    <nav className="">
      <div className="px-2 sm:px-6 mx-10 lg:mx-20 border border-2 border-t-0 border-b-0 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div >
            <a className="hidden lg:flex lg:justify-center lg:items-center hover:underline" href="mailto:stevengbmv@gmail.com">
              <img className="w-7 mr-5" src="/gmail.svg" alt="email" />
              <p className=" ">Stevengutierrez@gmail.com</p>
            </a>
          </div>
          <div className="flex flex-1 items-center sm:items-stretch sm:justify-end">
            {Object.keys(state).map((key) => (
              <Link key={key} onClick={() => handleClick(key)} className={state[key]} to={key === 'home' ? '/' : `/${key.toLowerCase()}`}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </Link>
            ))}
            <a href='https://docs.google.com/document/d/e/2PACX-1vSyhQZiSbwdl22MyLyUl2ViygTiA_BDse4dHQ8zWtHpUewE0wZDVeBIxAI_4Tjx3WUC5ShG_Ssmitm6/pub' className="text-slate-800 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-xl font-bold transition-color duration-100" target='_blank' rel='noopener noreferrer'>Resume</a>
          </div>
        </div>
      </div>
      <div className="w-[100vw] border border-1"></div>
    </nav>
  );
}

export default Nav;