import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import LoginForm from '../../components/LoginForm/LoginForm';
import {Section, Span} from '../../components/Utils/Utils';

export default class LoginPage extends Component {
  render() {
    return (
      <Section className="LoginPage">
        <h2>Login</h2>
        <LoginForm />
        <p>
          Don't have an account?{' '}
          <Span>
            <Link to="/register">Sign Up</Link>
          </Span>
        </p>
      </Section>
    );
  }
}
