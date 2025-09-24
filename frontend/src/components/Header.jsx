import React from "react";
import logo from "../assets/Addis.png";

const Header = () => {
  return (
    <div className="navbar bg-base-100 shadow-md px-6">
      {/* Left Section - Logo */}
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-2xl font-bold">
          <img src={logo} className="w-12" />
        </a>
      </div>

      {/* Right Section - Nav Links */}
      <div className="hidden md:flex gap-1">
        <a href="#home" className="btn btn-ghost">
          Home
        </a>
        <a href="#stats" className="btn btn-ghost">
          Stats
        </a>
        <a href="#messages" className="btn btn-ghost">
          Message
        </a>
        <a href="#service" className="btn btn-ghost">
          Services
        </a>
        <a href="#news" className="btn btn-ghost">
          News
        </a>
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
