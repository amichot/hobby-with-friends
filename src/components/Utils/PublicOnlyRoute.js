import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import TokenService from '../services/token-service';
import HomePage from '../../routes/HomePage/HomePage';

export default function PublicOnlyRoute({component, ...props}) {
  const Component = component;
  return (
    <Route
      {...props}
      render={componentProps =>
        TokenService.hasAuthToken() ? (
          <HomePage />
        ) : (
          <Component {...componentProps} />
        )
      }
    />
  );
}
