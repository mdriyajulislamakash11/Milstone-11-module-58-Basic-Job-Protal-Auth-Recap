import React, { useContext } from "react";
import { Link, Links, NavLink } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
    .then(() => {
        console.log("successful logout")
    }) 
  }

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allJobs">All Jobs</NavLink>
      </li>
      <li>
        <NavLink to="/job-applications">My Applications</NavLink>
      </li>
      <li>
        <NavLink to="/addJobs">Add Jobs</NavLink>
      </li>
      <li>
        <NavLink to="/myPostedJobs">My Posted Jobs</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">Job Protal</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
          <button onClick={handleSignOut} className="btn">Sign Out</button>
          </>
        ) : (
          <>
            <Link to="/register">Sign Up</Link>
            <Link to="/signIn" className="btn">
              <button className="btn">Sign In</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
