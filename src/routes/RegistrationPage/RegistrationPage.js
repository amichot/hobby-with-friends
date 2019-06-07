import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {Section, Span} from '../../components/Utils/Utils';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

export default class RegistrationPage extends Component {
  render() {
    return (
      <Section className="RegistrationPage">
        <h2>Register</h2>
        <RegistrationForm />
        <p>
          Have an account?{' '}
          <Span>
            <Link to="/login">Sign In</Link>
          </Span>
        </p>
      </Section>
    );
  }
}
