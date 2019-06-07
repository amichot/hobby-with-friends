import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import Header from '../Header/Header';
import NavigationBar from '../NavigationBar/NavigationBar';
import LoginPage from '../../routes/LoginPage/LoginPage';
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage';
import HomePage from '../../routes/HomePage/HomePage';
import CreateEventPage from '../../routes/CreateEventPage/CreateEventPage';
import SearchEventPage from '../../routes/SearchEventPage/SearchEventPage';
import EventPage from '../../routes/EventPage/EventPage';
import UserProfilePage from '../../routes/UserProfilePage/UserProfilePage';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <header className="App__header">
          <Header />
        </header>
        <main className="App__main">
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
}

export default App;
