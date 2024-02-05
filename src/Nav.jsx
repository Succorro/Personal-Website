import  { useState } from "react";
import { Link } from "react-router-dom";

const initialState = {
  home: "text-white hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-xl font-bold transition-color duration-100 underline decoration-2 decoration-background",
  about: "text-white hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-xl font-bold transition-color duration-100",
  projects: "text-white hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-xl font-bold transition-color duration-100",
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
        home: "text-white hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-xl font-bold transition-color duration-100"
      }
    } else {
      updatedState = {...initialState, [link]: initialState[link] + " underline decoration-2 decoration-background"}
    }
    setState(updatedState);
  }

  return (
    <nav className="pt-1 p-1 m-0">
      <div className="px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
            {Object.keys(state).map((key) => (
              <Link key={key} onClick={() => handleClick(key)} className={state[key]} to={key === 'home' ? '/' : `/${key.toLowerCase()}`}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </Link>
            ))}
            <a href='https://docs.google.com/document/d/e/2PACX-1vSyhQZiSbwdl22MyLyUl2ViygTiA_BDse4dHQ8zWtHpUewE0wZDVeBIxAI_4Tjx3WUC5ShG_Ssmitm6/pub' className="text-white hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-xl font-bold transition-color duration-100" target='_blank' rel='noopener noreferrer'>Resume</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;