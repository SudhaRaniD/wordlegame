import React from 'react';
import {NavLink} from 'react-router-dom';

function App() {
  return (
    <div className="content">
      <h1>HomePage</h1>
      <a href="https://www.reactrouter.com/" target="_blank">
        React Router V6 Docs
      </a>
      <br />
      <br />
      <a
        href="https://ultimatecourses.com/blog/active-navlink-inline-styles-with-react-router"
        target="_blank"
      >
        Docs on NavLinks
      </a>
      <br />
      <br />
      <a href="https://youtu.be/k2Zk5cbiZhg" target="_blank">
        YouTube Video of Router V6
      </a>
      <nav className="homePageNav">
        <ul>
          <li>
            <NavLink to = "/classMaterial/week9_01">ClassMaterials</NavLink>
          </li>
          <li>
            <NavLink to = "/classProject/tempCP">ClassProjects</NavLink>
          </li>
          <li>
            <NavLink to = "/homeWork/homework1">Homeworks</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
