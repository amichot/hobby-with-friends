import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './NavigationBar.css';

export default class NavigationBar extends Component {
  render() {
    return (
      <div className="menu-nav">
        <span className="menu-title">Menu</span>
        <div className="navigation-bar">
          <ul>
            <li>
              <Link to="/home">
                <i className="fa fa-home" />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/create">
                <i className="fa fa-create" />
                <span>Create Event</span>
              </Link>
            </li>
            <li>
              <Link to="/search">
                <i className="fa fa-search" />
                <span>Search Events</span>
              </Link>
            </li>
            <li>
              <Link to="/profile">
                <i className="fa fa-profile" />
                <span>Profile</span>
              </Link>
            </li>
            <li>
              <Link to="/login">
                <i className="fa fa-logout" /> <span>Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
