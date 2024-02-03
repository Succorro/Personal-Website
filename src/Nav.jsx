import  { useState } from "react";
import { Link } from "react-router-dom";
// import { Navbar, NavbarMenuToggle } from "@nextui-org/react";

const initialState = {
  home: "text-white hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-xl font-bold transition-color duration-100 underline decoration-2 decoration-background",
  about: "text-white hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-xl font-bold transition-color duration-100",
  projects: "text-white hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-xl font-bold transition-color duration-100",
  resume: "text-white hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-xl font-bold transition-color duration-100",
};

// eslint-disable-next-line react/prop-types
function Nav() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
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
            <div className="">
              <div className="flex ">
                {Object.keys(state).map((key) => (
                  <Link key={key} onClick={() => handleClick(key)} className={state[key]} to={key === 'home' ? '/' : `/${key.toLowerCase()}`}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* <Navbar onMenuOpenChange={setIsMenuOpen} className="w-1/8 bg-cornflowerblue mr-0 hover:outline-none hover:border-double focus:outline-none focus:border-none">
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="sm:hidden hover:outline-none hover:border-none focus:outline-none focus:border-none"
            />
          </Navbar> */}
        </div>
      </div>

      {/* <div className={isMenuOpen ? "block" : "hidden"} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {Object.keys(state).map((key) => (
            <Link key={key} onClick={() => handleClick(key)} className={state[key]} to={key === 'home' ? '/' : `/${key.toLowerCase()}`}>
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </Link>
          ))}
        </div>
      </div> */}
    </nav>
  );
}

export default Nav;