import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav class="flex">
        <span class="mr-6 dark:text-white">Brady Friese</span>
        <NavLink className="mr-6 hover:underline dark:text-white" to="/">
         <> Home </>
        </NavLink>
        <NavLink className="mr-6 hover:underline dark:text-white" to="/about">
        <> About me </>
        </NavLink>
        <NavLink className="mr-6 hover:underline dark:text-white" to="/skills">
        <>Skills </>
        </NavLink>
        <NavLink className="mr-6 hover:underline dark:text-white" to="/experience">
        <> Work Experience </>
        </NavLink>
        <NavLink className="mr-6 hover:underline dark:text-white" to="/contact">
        <>  Contact Me </>
        </NavLink>
    </nav>
  );
};

export default NavBar;
