import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <nav className="Header">
      <h1>
        {' '}
        <Link to="/">Hobby with Friends </Link>
      </h1>
    </nav>
  );
}
