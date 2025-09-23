import React from "react";

const Header = () => {
  return (
    <div className="navbar bg-base-100 shadow-md px-6">
      {/* Left Section - Logo */}
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-2xl font-bold">
          ADDIS REPLICA
        </a>
      </div>

      {/* Right Section - Nav Links */}
      <div className="hidden md:flex gap-4">
        <a className="btn btn-ghost">Home</a>
        <a className="btn btn-ghost">Service</a>
        <a className="btn btn-ghost">Programs</a>
        <a className="btn btn-ghost">Economy</a>
        <a className="btn btn-ghost">Resource</a>
      </div>

      {/* Mobile Menu */}
      <div className="dropdown dropdown-end md:hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Blogs</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a className="btn btn-primary mt-2">Login</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
