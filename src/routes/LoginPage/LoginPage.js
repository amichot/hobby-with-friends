import React, {Component} from 'react';
import LoginForm from '../../LoginForm/LoginForm';
import {Section} from '../../Utils/Utils';

export default class LoginPage extends Component {
  render() {
    return (
      <Section className="LoginPage">
        <h2>Login</h2>
        <LoginForm />
      </Section>
    );
  }
}
