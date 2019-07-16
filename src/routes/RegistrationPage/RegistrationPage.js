import React from 'react';
import {Link} from 'react-router-dom';

import {Section, Span} from '../../components/Utils/Utils';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

export default function RegistrationPage(props) {
  const handleRegistrationSuccess = user => {
    props.history.push('/');
  };

  return (
    <Section className="RegistrationPage">
      <h2>Register</h2>
      <RegistrationForm
        onRegistrationSuccess={handleRegistrationSuccess}
        {...props}
      />
      <p>
        Have an account?{' '}
        <Span>
          <Link to="/">Sign In</Link>
        </Span>
      </p>
    </Section>
  );
}
