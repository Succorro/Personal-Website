import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";

function Nav() {

  return (
    <Navbar shouldHideOnScroll className="bg-background">
      <NavbarBrand>
        <Link to="/" className="flex">
          <img className="h-8" src="/code.png" alt="code" />
        </Link>
      </NavbarBrand>
      <NavbarContent className="sm:flex gap-4" justify="center">
        <NavbarItem >
                <Link className={linkStyle} to='/projects'>Projects</Link>
        </NavbarItem>
        <NavbarItem >
                <Link className={linkStyle} to="/resume">Resume</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
const linkStyle = 'p-2 text-lg text-cornflowerblue font-semibold'

export default Nav;