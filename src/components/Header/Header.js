import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <div className="container-fluid px-lg-5">
      <nav className="py-4 d-lg-flex">
        <div id="logo">
          <h1>
            {' '}
            <Link to="/home">Hobby with Friends </Link>
          </h1>
        </div>
        <label htmlFor="drop" className="toggle">
          Menu
        </label>
        <input type="checkbox" id="drop" />
        <ul className="menu mt-2 ml-auto">
          <li>
            <Link className="scroll" to="/home">
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
            <Link className="scroll" to="/login">
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
