import React, {useState} from 'react';
import {Button, Input, Required} from '../Utils/Utils';
import AuthApiService from '../services/auth-api-service';

export default function RegistrationForm(props) {
  const [error, setError] = useState(null);

  function updateError(e) {
    return setError(e);
  }

  const handleSubmit = ev => {
    ev.preventDefault();
    const {profile_name, user_name, email, password} = ev.target;

    console.log('registration form submitted');
    console.log({profile_name, user_name, email, password});
    AuthApiService.postUser({
      profile_name: profile_name.value,
      name: user_name.value,
      email: email.value,
      password: password.value,
    })
      .then(user => {
        profile_name.value = '';
        user_name.value = '';
        email.value = '';
        password.value = '';
        props.onRegistrationSuccess();
      })
      .catch(res => {
        updateError(res.error);
      });
  };

  return (
    <form className="RegistrationForm" onSubmit={handleSubmit}>
      <div role="alert">{error && <p className="red">{error}</p>}</div>
      <div className="profile_name">
        <label htmlFor="RegistrationForm__profile_name">
          Profile Name <Required />
        </label>
        <Input
          name="profile_name"
          type="text"
          required
          id="RegistrationForm__profile_name"
        />
      </div>
      <div className="user_name">
        <label htmlFor="RegistrationForm__user_name">
          User name <Required />
        </label>
        <Input
          name="user_name"
          type="text"
          required
          id="RegistrationForm__user_name"
        />
      </div>
      <div className="email">
        <label htmlFor="RegistrationForm__email">
          Email <Required />
        </label>
        <Input
          name="email"
          type="email"
          required
          id="RegistrationForm__email"
        />
      </div>
      <div className="password">
        <label htmlFor="RegistrationForm__password">
          Password <Required />
        </label>
        <Input
          name="password"
          type="password"
          required
          id="RegistrationForm__password"
        />
      </div>
      <Button type="submit">Register</Button>
    </form>
  );
}
