import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Header from '../Header/Header';
import LoginPage from '../../routes/LoginPage/LoginPage';
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage';
import HomePage from '../../routes/HomePage/HomePage';
import CreateEventPage from '../../routes/CreateEventPage/CreateEventPage';
import SearchEventPage from '../../routes/SearchEventPage/SearchEventPage';
import EventPage from '../../routes/EventPage/EventPage';
import UserProfilePage from '../../routes/UserProfilePage/UserProfilePage';

import './App.css';

function App(props) {
    return (
      <div className="App">
        <header className="main-content">
          <Header />
        </header>
        <main className="main">
          {
            <Switch>
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegistrationPage} />
              <Route path="/home" component={HomePage} />
              <Route path="/create" component={CreateEventPage} />
              <Route path="/search" component={SearchEventPage} />
              <Route path="/event" component={EventPage} />
              <Route path="/profile" component={UserProfilePage} />
            </Switch>
          }
        </main>
      </div>
    );
  }

export default App;
