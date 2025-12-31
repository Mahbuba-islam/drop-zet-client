import { NavLink } from "react-router";
import { FaSearch } from "react-icons/fa";
import DropZetLogo from "../dropZetLogo";


const Navbar = () => {
    const navItems = <>
      <li>
  <NavLink to="/" className={({ isActive }) =>
     isActive ? "text-orange-500 font-bold" : "hover:text-orange-500" }>
    HOME
  </NavLink>
</li>

<li>
  <NavLink  to="/about" className={({ isActive }) => 
    isActive ? "text-orange-500 font-bold" : "hover:text-orange-500"}>
    ABOUT
  </NavLink>
</li>

<li>
  <NavLink to="/tracking" className={({ isActive }) => 
   isActive ? "text-orange-500 font-bold" : "hover:text-orange-500"}>
    TRACKING
  </NavLink>
</li>

<li>
  <NavLink to="/pricing" className={({ isActive }) => 
  isActive ? "text-orange-500 font-bold" : "hover:text-orange-500"
  }
  >
    PRICING
  </NavLink>
</li>

<li><NavLink to="/contact"  className={({ isActive }) => 
     isActive ? "text-orange-500 font-bold" : "hover:text-orange-500"}>
    CONTACT
  </NavLink>
</li>

<li>
  <NavLink to="/blog"  className={({ isActive }) => 
  isActive ? "text-orange-500 font-bold" : "hover:text-orange-500"
    }>
    BLOG
  </NavLink>
</li>

<li>
  <NavLink  to="/pages" 
    className={({ isActive }) => 
      isActive ? "text-orange-500 font-bold" : "hover:text-orange-500"}>
    PAGES
  </NavLink>
</li>
    </>
    return (
       <div className="navbar bg-base-100 shadow-sm rounded-xl ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {navItems}
      </ul>
    </div>
    <DropZetLogo></DropZetLogo>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navItems}
    </ul>
  </div>
   <div className="bg-orange-500 p-2 rounded cursor-pointer">
        <FaSearch className="text-white text-sm" />
      </div>

</div>
    );
};

export default Navbar;