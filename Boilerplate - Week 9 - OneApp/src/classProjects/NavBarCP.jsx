import React  from "react";
import {NavLink} from "react-router-dom";

function NavBarCP() {
  return (
    <nav className="sidenav HWNav">
        <ul>
            <li>
                <NavLink className={({isActive}) =>(isActive ? 'activeLink':'')}
                 to = "/">HomePage</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) =>(isActive ? 'activeLink':'')}
                 to = "/classProjects/Project30"> project30</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) =>(isActive ? 'activeLink':'')}
                 to = "/classProjects/Project31"> Project31 </NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) =>(isActive ? 'activeLink':'')}
                 to = "/classProjects/Project32"> Project32 </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default NavBarCP;
