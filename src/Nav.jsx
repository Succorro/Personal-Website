import { Link } from "react-router-dom";
import {Navbar,  NavbarMenuToggle } from "@nextui-org/react";
import { useState } from "react";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <nav className="bg-cornflowerblue pt-1 p-1 m-0">
      <div className=" px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-0 sm:pr-0">
            <button type="button" className="p-1.5 relative rounded-full bg-gray-800 p-1 text-white hover:outline-none hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
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
          </div>
          
          
          <Navbar onMenuOpenChange={setIsMenuOpen} className="w-1/8 bg-cornflowerblue mr-0 hover:outline-none hover:border-double focus:outline-none focus:border-none">
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="sm:hidden hover:outline-none hover:border-none focus:outline-none focus:border-none"
            />
          </Navbar>
          
        </div>
      </div>

      <div className={isMenuOpen ? 'sm:hidden': 'sm:hidden hidden'} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
        <Link className="text-white hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-xl font-bold" to='/projects'>Projects</Link>
        <Link className="text-white hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-xl font-bold" to="/resume">Resume</Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;