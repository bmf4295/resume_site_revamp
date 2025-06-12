import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-sm bg-white/75 dark:bg-gray-900/75 border-b border-gray-200 dark:border-gray-700 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name section */}
          <span className="text-xl font-bold text-gray-800 dark:text-white">
            Brady Friese
          </span>

          {/* Hamburger button */}
          <button
            className="sm:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            onClick={toggleMenu}
          >
            <i
              className={`fas ${
                isMenuOpen ? "fa-times" : "fa-bars"
              } text-xl`}
            ></i>
          </button>

          {/* Desktop menu */}
          <div className="hidden sm:grid grid-flow-col gap-6">
            <a href="#home" className="nav-link text-sm">
              Home
            </a>
            <a href="#about" className="nav-link text-sm">
              About me
            </a>
            <a href="#experience" className="nav-link text-sm">
              Work Experience
            </a>
            <a href="#skills" className="nav-link text-sm">
              Skills
            </a>
            <a href="#contact" className="nav-link text-sm">
              Contact Me
            </a>
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

        {/* Mobile menu */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } sm:hidden flex-col space-y-4 py-4 px-2 bg-white/95 dark:bg-gray-900/95 rounded-b-lg`}
        >
          <a href="#home" className="nav-link text-sm">
            Home
          </a>
          <a href="#about" className="nav-link text-sm">
            About me
          </a>
          <a href="#experience" className="nav-link text-sm">
            Work Experience
          </a>
          <a href="#skills" className="nav-link text-sm">
            Skills
          </a>
          <a href="#contact" className="nav-link text-sm">
            Contact Me
          </a>
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
    </nav>
  );
};

export default NavBar;
