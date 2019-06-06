import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import Header from '../Header/Header';
import LoginPage from '../../routes/LoginPage/LoginPage';
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage';
import CreateEventPage from '../../routes/CreateEventPage/CreateEventPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App__header">
          <Header />
        </header>
        <main className="App__main">
          {
            <Switch>
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegistrationPage} />
              <Route path="/create" component={CreateEventPage} />
            </Switch>
          }
        </main>
      </div>
    );
  }
}

export default App;
