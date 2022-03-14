import React  from "react";
import {NavLink} from "react-router-dom";

function NavBarCM() {
  return (
    <nav className="sidenav HWNav">
        <ul>
            <li>
                <NavLink className={({isActive}) =>(isActive ? 'activeLink':'')}
                 to = "/">HomePage</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) =>(isActive ? 'activeLink':'')}
                 to = "/classMaterial/week9_01">Week9 First App</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) =>(isActive ? 'activeLink':'')}
                 to = "/classMaterial/week9_02">Week9 JSX</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) =>(isActive ? 'activeLink':'')}
                 to = "/classMaterial/week9_03">Week Forms</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default NavBarCM;
