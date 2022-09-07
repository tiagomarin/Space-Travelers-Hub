import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './NavBar.css';

const NavBar = () => (
  <nav className="nav-bar">
    <div className="nav-bar-wrapper">
      <div className="logo-wrapper">
        <img src={logo} alt="logo" />
        <h1>Space Traveler&apos;s Hub</h1>
      </div>
      <ul className="links-nav">
        <li><Link to="/"> Rockets </Link></li>
        <li><Link to="/Missions"> Missions </Link></li>
        <li><Link to="/MyProfile"> My Profile </Link></li>
      </ul>
    </div>
  </nav>

);

export default NavBar;
