import React from 'react';
import {Link} from 'react-router-dom';
import TokenService from '../services/token-service';
import {Hyph} from '../Utils/Utils';
import './Header.css';

export default function Header() {
  const handleLogoutClick = () => {
    TokenService.clearAuthToken();
  };

  const renderLogoutLink = () => {
    return (
      <div className="Header__logged-in">
        <label htmlFor="drop" className="toggle">
          Menu
        </label>
        <input type="checkbox" id="drop" />
        <ul className="menu mt-2 ml-auto">
          <li>
            <Link className="scroll" to="/">
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link className="scroll" to="/create">
              <span>Create Event</span>
            </Link>
          </li>
          <li>
            <Link className="scroll" to="/search">
              <span>Search Events</span>
            </Link>
          </li>
          <li>
            <Link className="scroll" to="/profile">
              <span>Profile</span>
            </Link>
          </li>
          <li>
            <Link className="scroll" onClick={handleLogoutClick} to="/login">
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const renderLoginLink = () => {
    return (
      <div className="Header__not-logged-in">
        <Link to="/register">Register</Link>
        <Hyph />
        <Link to="/login">Log in</Link>
      </div>
    );
  };
  return (
    <div className="container-fluid px-lg-5">
      <nav className="py-4 d-lg-flex">
        <div id="logo">
          <h1>
            {' '}
            <Link to="/">Hobby with Friends </Link>
          </h1>
        </div>
        {TokenService.hasAuthToken() ? renderLogoutLink() : renderLoginLink()}
      </nav>
    </div>
  );
}
