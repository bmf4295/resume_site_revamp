import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-sm bg-white/75 dark:bg-gray-900/75 border-b border-gray-200 dark:border-gray-700 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name section */}
          <span className="text-xl font-bold text-gray-800 dark:text-white">
            Brady Friese
          </span>

          {/* Navigation Links - updated with consistent spacing */}
          <div className="grid grid-flow-col gap-6">
            <a
              href="#home"
              onClick={(e) => handleScroll(e, "home")}
              className="nav-link"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => handleScroll(e, "about")}
              className="nav-link"
            >
              About me
            </a>
            <a
              href="#experience"
              onClick={(e) => handleScroll(e, "experience")}
              className="nav-link"
            >
              Work Experience
            </a>
            <a
              href="#skills"
              onClick={(e) => handleScroll(e, "skills")}
              className="nav-link"
            >
              Skills
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "contact")}
              className="nav-link"
            >
              Contact Me
            </a>
            {/* Resume Link */}
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
