import React from 'react';
import {Section} from '../../components/Utils/Utils';
import Event from '../../components/Event/Event';

export default function EventPage(props) {
  return (
    <Section className="CreateEvent">
      <h2>Event Name</h2>
      <Event />
    </Section>
  );
}
