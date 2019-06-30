import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import TokenService from '../services/token-service';
import LoginPage from '../../routes/LoginPage/LoginPage';

export default function PrivateRoute(props) {
  console.log(props);

  return (
    <Route
      {...props}
      render={componentProps =>
        TokenService.hasAuthToken() ? (
          <Redirect to={'/'} />
        ) : (
          <LoginPage {...componentProps} />
        )
      }
    />
  );
}
