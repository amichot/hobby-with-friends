import React from 'react';
import {Link} from 'react-router-dom';

import {Section, Span} from '../../components/Utils/Utils';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

import './Registration.css';

export default function RegistrationPage(props) {
  const handleRegistrationSuccess = user => {
    props.history.push('/');
  };

  const toggleDescription = () => {
    let showDescription = document.getElementById('description');
    showDescription.style.display =
      showDescription.style.display === 'block' ? 'none' : 'block';
  };

  return (
    <Section className="RegistrationPage">
      <div className="container">
        <h2 id="focus" className="welcome">
          Register
        </h2>
        <Link onClick={toggleDescription} to="#">
          Details on Website Here
        </Link>
      </div>
      <p id="description" className="indent">
        Hobby with Friends is designed to connect you with others that enjoy
        similar interests. Have you ever organized an event by sending a mass
        text message that unavoidably leads to everyone's phone being spammed,
        or simply showed up to your college gym looking for a pick-up game of
        basketball to find it empty? This app excels at keeping you connected
        and organized. Start by creating an account, then head over to your
        profile page to add your interests. Your home page will show you the
        events you created along with events that match your interests. Search
        for events around you, find the one you like click the title to view the
        full details of the event, then hit the join button to let the event
        owner you will be attending. Creating an event has never been easier,
        simply fill out the form and tell your friends about the website. As the
        owner of the event, you will have the ability to remove users from the
        event.
      </p>
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
