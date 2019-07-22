import React, {Component} from 'react';
import {HashLink as Link} from 'react-router-hash-link';
import TokenService from '../services/token-service';
import './Header.css';

export default class Header extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
  };

  renderMenuLinks = () => {
    return (
      <div className="Header__logged-in">
        <label htmlFor="drop" className="toggle">
          m e n u
        </label>
        <input type="checkbox" id="drop" />
        <ul className="menu mt-2 ml-auto">
          <li>
            <Link className="scroll" to="/">
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link className="scroll" to="/create#focus">
              <span>Create Event</span>
            </Link>
          </li>
          <li>
            <Link className="scroll" to="/search#focus">
              <span>Search Events</span>
            </Link>
          </li>
          <li>
            <Link className="scroll" to="/profile#focus">
              <span>Profile</span>
            </Link>
          </li>
          <li>
            <Link
              className="scroll"
              onClick={this.handleLogoutClick}
              to="/login"
            >
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    );
  };
  render() {
    return (
      <nav className="py-4 d-lg-flex">
        <div id="logo">
          {' '}
          <h1> Hobby with Friends</h1>
        </div>
        {this.renderMenuLinks()}
      </nav>
    );
  }
}
