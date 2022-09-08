import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.png';
import './NavBar.css';

const NavBar = () => (
  <nav className="nav-bar">
    <div className="nav-bar-wrapper">
      <div className="logo-wrapper">
        <img src={logo} alt="logo" />
        <h1>Space Traveler&apos;s Hub</h1>
      </div>
      <ul className="nav-links-wrap">
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'nav-links active' : 'nav-links')} to="/">
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'nav-links active' : 'nav-links')} to="/Missions">
            Missions
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'nav-links active' : 'nav-links')} to="/MyProfile">
            My Profile
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

// className = {({ isActive }) => (isActive ? 'rockets-link active-link' : 'none')}

export default NavBar;
