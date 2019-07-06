import React from 'react';
import {Switch} from 'react-router-dom';

import Header from '../Header/Header';
import LoginPage from '../../routes/LoginPage/LoginPage';
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage';
import HomePage from '../../routes/HomePage/HomePage';

import PrivateRoute from '../Utils/PrivateRoute';
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="main-content">
        <Header />
      </header>
      <main className="main">
        <Switch>
          <PublicOnlyRoute path="/" component={LoginPage} />
          <PrivateRoute
            exact
            path="/home"
            render={routeProps => <HomePage {...routeProps} />}
          />
          <PublicOnlyRoute path="/register" component={RegistrationPage} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
