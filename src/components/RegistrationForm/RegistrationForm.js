import React, {Component} from 'react';
import {Button, Input, Required} from '../Utils/Utils';

export default class RegistrationForm extends Component {
  render() {
    return (
      <form className="RegistrationForm">
        <div className="full_name">
          <label htmlFor="RegistrationForm__full_name">
            Full name <Required />
          </label>
          <Input
            name="full_name"
            type="text"
            required
            id="RegistrationForm__full_name"
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
        <div className="repeat_password">
          <label htmlFor="RegistrationForm__repeat__password">
            Repeat Password <Required />
          </label>
          <Input
            name="repeat_password"
            type="password"
            required
            id="RegistrationForm__repeat__password"
          />
        </div>
        <Button type="submit">Register</Button>
      </form>
    );
  }
}
