import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav class="flex">
        <span class="mr-6">Brady Friese</span>
        <NavLink className="mr-6 hover:underline " to="/">
         <> Home </>
        </NavLink>
        <NavLink className="mr-6 hover:underline" to="/about">
        <> About me </>
        </NavLink>
        <NavLink className="mr-6 hover:underline" to="/skills">
        <>Skills </>
        </NavLink>
        <NavLink className="mr-6 hover:underline" to="/experience">
        <> Work Experience </>
        </NavLink>
        <NavLink className="mr-6 hover:underline" to="/contact">
        <>  Contact Me </>
        </NavLink>
    </nav>
  );
};

export default NavBar;
