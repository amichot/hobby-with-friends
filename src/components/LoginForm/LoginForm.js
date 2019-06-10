import React from 'react';
import {Button, Input} from '../Utils/Utils';

export default function LoginForm(props) {
  return (
    <form className="LoginForm">
      <div className="user_name">
        <label htmlFor="LoginForm__user_name">User name</label>
        <Input required name="user_name" id="LoginForm__user_name" />
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
