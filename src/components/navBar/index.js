import React, { useState } from "react";


const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = (e, id) => {
    e.preventDefault();
    setIsMenuOpen(false); // Close mobile menu when clicking a link
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav data-testid="navbar" className="fixed top-0 left-0 w-full bg-gray-900 border-b border-gray-700 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name section */}
          <span className="text-xl font-bold text-white">
            Brady Friese
          </span>

          {/* Hamburger button */}
          <button
            className="sm:hidden p-2 text-gray-300 hover:text-white"
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
            <a
              href="#home"
              onClick={(e) => handleScroll(e, "home")}
              className="nav-link text-sm"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => handleScroll(e, "about")}
              className="nav-link text-sm"
            >
              About me
            </a>
            <a
              href="#experience"
              onClick={(e) => handleScroll(e, "experience")}
              className="nav-link text-sm"
            >
              Work Experience
            </a>
            <a
              href="#skills"
              onClick={(e) => handleScroll(e, "skills")}
              className="nav-link text-sm"
            >
              Skills
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "contact")}
              className="nav-link text-sm"
            >
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
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } sm:hidden flex-col space-y-4 py-4 px-2 bg-gray-900 rounded-b-lg`}
      >
        <a
          href="#home"
          onClick={(e) => handleScroll(e, "home")}
          className="nav-link text-sm"
        >
          Home
        </a>
        <a
          href="#about"
          onClick={(e) => handleScroll(e, "about")}
          className="nav-link text-sm"
        >
          About me
        </a>
        <a
          href="#experience"
          onClick={(e) => handleScroll(e, "experience")}
          className="nav-link text-sm"
        >
          Work Experience
        </a>
        <a
          href="#skills"
          onClick={(e) => handleScroll(e, "skills")}
          className="nav-link text-sm"
        >
          Skills
        </a>
        <a
          href="#contact"
          onClick={(e) => handleScroll(e, "contact")}
          className="nav-link text-sm"
        >
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
    </nav>
  );
};

export default NavBar;
