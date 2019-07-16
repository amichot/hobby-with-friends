import React from 'react';
import {HashLink as Link} from 'react-router-hash-link';

import LoginForm from '../../components/LoginForm/LoginForm';
import {Section, Span} from '../../components/Utils/Utils';

export default function LoginPage(props) {
  const handleLoginSuccess = () => {
    const destination = (props.location.path || {}).from || '/home';
    props.history.push(destination);
  };

  return (
    <Section className="LoginPage">
      <h2>Login</h2>
      <LoginForm onLoginSuccess={handleLoginSuccess} {...props} />
      <p>
        Don't have an account?{' '}
        <Span>
          <Link to="/register#focus">Sign Up</Link>
        </Span>
      </p>
    </Section>
  );
}
