import React, {Component} from 'react';
import {Section} from '../../components/Utils/Utils';
import Event from '../../components/Event/Event';

export default class EventPage extends Component {
  render() {
    return (
      <Section className="CreateEvent">
        <h2>Event Name</h2>
        <Event />
      </Section>
    );
  }
}
