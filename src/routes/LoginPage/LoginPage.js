import React from 'react';
import {Link} from 'react-router-dom';

import LoginForm from '../../components/LoginForm/LoginForm';
import {Section, Span} from '../../components/Utils/Utils';

export default function LoginPage(props) {
  const handleLoginSuccess = () => {
    const destination = (props.location.state || {}).from || '/';
    props.history.push(destination);
  };

  return (
    <Section className="LoginPage">
      <h2>Login</h2>
      <LoginForm onLoginSuccess={handleLoginSuccess} {...props} />
      <p>
        Don't have an account?{' '}
        <Span>
          <Link to="/register">Sign Up</Link>
        </Span>
      </p>
    </Section>
  );
}
