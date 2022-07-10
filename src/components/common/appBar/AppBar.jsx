import React from 'react';
import { Link } from 'react-router-dom';
import './AppBar.scss';

const AppBar = () => {
  return (
    <nav className="app-bar-container">
      <label>
        FACUNDO ARGAÑARAZ
      </label>
      <ul>
        <li>
          <Link to="/">
            <div>
              Home
            </div>
          </Link>
        </li>
        <li>
          <Link to="/publications">
            <div>
              Publications
            </div>
          </Link>
        </li>
        <li>
          <Link to="/working-papers">
            <div>
              Working Papers
            </div>
          </Link>
        </li>
        <li>
          <Link to="/talks">
            <div>
              Talks
            </div>
          </Link>
        </li>
        <li>
          <Link to="/teaching">
            <div>
              Teaching
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default AppBar;