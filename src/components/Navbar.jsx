import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import Lottie from "lottie-react";
import personLottie from "../assets/logo.json"; // Lottie JSON file

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    if (logOut) {
      logOut()
        .then(() => {
          console.log("successful logout");
        })
        .catch((error) => {
          console.error("Logout failed:", error);
        });
    } else {
      console.error("logOut function not available");
    }
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "btn btn-active" : "btn btn-ghost"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allJobs"
          className={({ isActive }) =>
            isActive ? "btn btn-active" : "btn btn-ghost"
          }
        >
          All Jobs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/job-applications"
          className={({ isActive }) =>
            isActive ? "btn btn-active" : "btn btn-ghost"
          }
        >
          My Applications
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addJobs"
          className={({ isActive }) =>
            isActive ? "btn btn-active" : "btn btn-ghost"
          }
        >
          Add Jobs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myPostedJobs"
          className={({ isActive }) =>
            isActive ? "btn btn-active" : "btn btn-ghost"
          }
        >
          My Posted Jobs
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md">
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

        <Link
          to="/"
          className="btn btn-ghost text-xl flex items-center gap-2"
        >
          <span>Job Portal</span>
          <div className="w-8 h-8">
            <Lottie animationData={personLottie} loop={true} />
          </div>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <button onClick={handleSignOut} className="btn">
            Sign Out
          </button>
        ) : (
          <>
            <Link to="/register" className="btn btn-outline mr-2">
              Sign Up
            </Link>
            <Link to="/signIn">
              <button className="btn">Sign In</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
