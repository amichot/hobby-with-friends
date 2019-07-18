import React, {useState} from 'react';

import AuthApiService from '../services/auth-api-service';
import {Button, Input} from '../Utils/Utils';

export default function LoginForm(props) {
  console.log('Login Page Ran');
  const [error, setError] = useState(null);
  function updateError(e) {
    return setError(e);
  }

  const handleSubmitJwtAuth = ev => {
    ev.preventDefault();
    const {name, password} = ev.target;

    AuthApiService.postLogin({
      name: name.value,
      password: password.value,
    })
      .then(res => {
        name.value = '';
        password.value = '';
        const storageHolder = {TOKEN_KEY: res.authToken, USER_ID: res.id};
        localStorage.setItem('config', JSON.stringify(storageHolder));
        props.onLoginSuccess();
      })
      .catch(res => {
        updateError(res.error);
      });
  };
  return (
    <form className="LoginForm" onSubmit={handleSubmitJwtAuth}>
      <div role="alert">{error && <p className="red">{error}</p>}</div>
      <div className="name">
        <label htmlFor="LoginForm__name">User name</label>
        <Input required name="name" id="LoginForm__name" />
      </div>
      <div className="password">
        <label htmlFor="LoginForm__password">Password</label>
        <Input
          required
          name="password"
          type="password"
          id="LoginForm__password"
        />
      </div>
      <Button type="submit">Login</Button>
    </form>
  );
}
