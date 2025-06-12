import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-sm bg-white/75 dark:bg-gray-900/75 border-b border-gray-200 dark:border-gray-700 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name section */}
          <span className="text-xl font-bold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Brady Friese
          </span>

          {/* Navigation Links - updated with consistent spacing */}
          <div className="grid grid-flow-col gap-6">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/about">
              About me
            </NavLink>
            <NavLink className="nav-link" to="/experience">
              Work Experience
            </NavLink>
            <NavLink className="nav-link" to="/skills">
              Skills
            </NavLink>
            <NavLink className="nav-link" to="/contact">
              Contact Me
            </NavLink>
            <a
              href="/resume.pdf"
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume{" "}
              <i className="fas fa-external-link-alt text-xs ml-1"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
