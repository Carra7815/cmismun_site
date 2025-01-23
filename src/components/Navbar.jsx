import { Link } from "react-router-dom";

import Navmenu from "./Navmenu";
// import ToggleTheme from "./ToggleTheme";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="p-4 bg-teal-900">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="flex select-none items-center text-xl font-bold text-white"
        >
          <img src={logo} alt="Logo" className="inline-block h-10 w-10" />
          <span className="ml-2 inline-block">CMMUN</span>
        </Link>
        <ul className="flex items-center space-x-4">
          <li>
            <Link to="/about" className="nav-item">
              About
            </Link>
          </li>
          <li>
            <Link to="/resolutions" className="nav-item">
              Resolutions
            </Link>
          </li>
          <li className="flex">
            <Navmenu />
          </li>
          {/* <li className="flex">
            <ToggleTheme />
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
