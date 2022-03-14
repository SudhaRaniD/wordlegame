
import React from 'react'
import {NavLink} from "react-router-dom";

function NavBarHW() {
  return (
    <nav className="sidenav HWNav">
        <ul>
            <li>
                <NavLink className={({isActive}) =>(isActive ? 'activeLink':'')} to = "/">HomePage</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) =>(isActive ? 'activeLink':'')} to = "/homeworkhomework1">Homework1</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) =>(isActive ? 'activeLink':'')} to = "/homeworkhomework2">Home work2</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) =>(isActive ? 'activeLink':'')} to = "/homeworkhomework3">Homework3</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default NavBarHW;
