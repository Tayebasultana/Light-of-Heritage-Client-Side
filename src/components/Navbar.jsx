import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { FiSun } from "react-icons/fi";
import { IoMoon } from "react-icons/io5";
import { authContext } from "./AuthProvider/AuthProvider";



const Navbar = () => {
    const {user, handleLogout} = useContext(authContext)

    const [isDarkMode, setIsDarkMode] = useState(false);

    // Function to toggle theme
    const toggleTheme = () => {
      setIsDarkMode(!isDarkMode);
      document.body.classList.toggle("dark", !isDarkMode);
    };
    

    return (
        <div className="relative">
      {/* <div><img src={plane} alt="" className="h-24 absolute left-64 -top-2"/></div> */}

<div className="navbar px-2 md:px-7 lg:px-24 mx-auto">
  <div className="navbar-start">

  <div className="navbar-center md:navbar-center lg:navbar-start">
    <h2 className="font-bold text-2xl ">Light of Heritage</h2>
  </div>


    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-[#c5e1e8] text-black dark:text-white dark:bg-[#1d232a] rounded-box z-[100] mt-3 w-52 p-2 shadow ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-black dark:text-blue-300"
              : "text-white dark:text-gray-300"
            }>
          Home
        </NavLink>
        <NavLink to="/all-artifacts" className={({ isActive }) => isActive? "text-black" : ""}>All Artifacts</NavLink>
        <NavLink to ="/add-artifacts" className={({ isActive }) => isActive? "text-black" : ""}>Add Artifacts</NavLink>
      </ul>
    </div>
  </div>


  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-7">
    <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-black dark:text-blue-300"
              : "text-white dark:text-gray-300"
            }>
        Home
    </NavLink>
    <NavLink
          to="/all-artifacts"
          className={({ isActive }) =>
            isActive
              ? "text-black dark:text-blue-300"
              : "text-white dark:text-gray-300"
            }>
        All Artifacts
    </NavLink>
    <NavLink
          to="/add-artifacts"
          className={({ isActive }) =>
            isActive
              ? "text-black dark:text-blue-300"
              : "text-white dark:text-gray-300"
            }>
        Add Artifacts
    </NavLink>
    </ul>
  </div>



  <div className="navbar-end">
  <div className="mr-4">
    <button onClick={toggleTheme} className="">
      {isDarkMode ? <FiSun /> : <IoMoon />}
    </button>
  </div>

  {user?.email ? (
    // Show dropdown with avatar and options if the user is logged in
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="User Avatar"
            src={user.photoURL}
          />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-[#c5e1e8] dark:bg-[#1d232a] rounded-box z-[1] mt-3 w-52 p-2 shadow">

          {/* pages */}
          <li>
          <NavLink
          to="/my-artifacts"
          className={({ isActive }) =>
            isActive
              ? "text-black dark:text-blue-300"
              : "text-white dark:text-gray-300"
            }>
           My Artifacts
         </NavLink>
          </li>

         <li>
         <NavLink
          to="/liked-artifacts"
          className={({ isActive }) =>
            isActive
              ? "text-black dark:text-blue-300"
              : "text-white dark:text-gray-300"
            }>
          Liked Artifacts
         </NavLink>
         </li>

        {/* <li>
          <NavLink to="/update-profile" className="justify-between">
            Update Profile
          </NavLink>
        </li> */}
        <li>
          <button onClick={handleLogout} className="mt-3 w-full p-2 bg-[#3d8396e0]  rounded-md hover:bg-[#357283e0] text-black">Logout</button>
        </li>
      </ul>
    </div>
  ) : (
    // Show login button if the user is not logged in
    <NavLink to="/login" className="btn px-7 font-bold bg-transparent">
      Log In
    </NavLink>
  )}
</div>



        </div>
       </div>
    );
};

export default Navbar;