import { Link } from "react-router-dom";

import { useState } from "react";

function Nav() {
  const [menuClick, setMenuClick] = useState("sm:hidden hidden")

  function handleMenuClick (){
    if(menuClick === "sm:hidden hidden") {
      setMenuClick('sm:hidden')
    } else {
      setMenuClick('sm:hidden hidden')
    }

  }
  return (
    <nav className="bg-cornflowerblue pt-1 p-1">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-0 sm:pr-0">
            <button type="button" className="p-1.5 relative rounded-full bg-gray-700 p-1 text-white hover:outline-none hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <Link className="hover:text-gray-300 hover:outline-none" to='/'>
                <p className="text-xl font-bold">SG</p>
              </Link>
            </button>
          </div>

          
          <div className=" flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex sm:ml-auto sm:mr-auto space-x-4">
                <Link className="text-white hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-xl font-bold" to='/projects'>Projects</Link>
                <Link className="text-white hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-xl font-bold" to="/resume">Resume</Link>
              </div>
            </div>
            {/* <div className="flex flex-shrink-0 items-center">
              <Link to="/" className="flex">
                <img className="h-10 w-auto" src="/code.png" alt="code" />
              </Link>
            </div> */}
          </div>
          
          <div className=" inset-y-0 left-0 flex items-center sm:hidden">
            <button onClick={handleMenuClick} type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg className="block h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg> 
            </button>
          </div>

          
        </div>
      </div>

      <div className={menuClick} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
        <Link className="text-white hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-xl font-bold" to='/projects'>Projects</Link>
        <Link className="text-white hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-xl font-bold" to="/resume">Resume</Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;