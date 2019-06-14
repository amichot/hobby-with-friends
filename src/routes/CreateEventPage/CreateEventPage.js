import React from 'react';
import {Section} from '../../components/Utils/Utils';
import EventForm from '../../components/EventForm/EventForm';

export default function CreateEvent(props) {
  console.log(props);
  return (
    <Section className="CreateEvent">
      <h2>Create Event</h2>
      <EventForm {...props} />
    </Section>
  );
}
