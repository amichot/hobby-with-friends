import React, {Component} from 'react';
import {Section} from '../../components/Utils/Utils';
import EventForm from '../../components/EventForm/EventForm';

export default class LoginPage extends Component {
  render() {
    return (
      <Section className="CreateEvent">
        <h2>Create Event</h2>
        <EventForm />
      </Section>
    );
  }
}
