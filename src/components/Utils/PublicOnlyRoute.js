import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import TokenService from '../services/token-service';
import HomePage from '../../routes/HomePage/HomePage';
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage';

export default function PublicOnlyRoute({component, ...props}) {
  const Component = component;
  return (
    <React.Fragment>
      <Route
        {...props}
        render={componentProps =>
          TokenService.hasAuthToken() ? (
            <HomePage path="/home" />
          ) : (
            <Component {...componentProps} />
          )
        }
      />
      <Switch>
        {TokenService.hasAuthToken() ? (
          <Redirect to="/home" />
        ) : (
          <RegistrationPage path="/register" />
        )}
      </Switch>
    </React.Fragment>
  );
}
