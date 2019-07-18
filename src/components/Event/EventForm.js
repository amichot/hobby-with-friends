import React from 'react';

import {useFormInput, Button, Input, Required, Textarea} from '../Utils/Utils';

export default function EventForm(props) {
  console.log('Event Form Page Ran');
  const today = new Date();
  const todaysDate =
    today.getFullYear() +
    '-' +
    ('0' + (today.getMonth() + 1)).slice(-2) +
    '-' +
    ('0' + today.getDate()).slice(-2);

  const name = useFormInput('');
  const type = useFormInput('');
  const location = useFormInput('');
  const date = useFormInput(`${todaysDate}T12:00`);
  const information = useFormInput('');
  const event = {
    name: name.value,
    type: type.value,
    location: location.value,
    date:
      new Date(date.value).getTime() + new Date(date.value).getTimezoneOffset(),
    information: information.value,
  };

  return (
    <form
      className="EventForm"
      action="#"
      onSubmit={e => {
        e.preventDefault();
        props.addEvent(event);
        return props.history.push('/');
      }}
    >
      <div className="event_name" id="focus">
        <label htmlFor="EventForm__event_name">
          Event Name <Required />
        </label>
        <Input
          name="event_name"
          type="text"
          {...name}
          required
          id="EventForm__event_name"
        />
      </div>
      <div className="event_type">
        <label htmlFor="EventForm__event_type">
          Event Type <Required />
        </label>
        <Input
          name="event_type"
          type="text"
          {...type}
          required
          id="EventForm__event_type"
        />
      </div>
      <div className="location">
        <label htmlFor="EventForm__location">
          Location <Required />
        </label>
        <Input
          name="location"
          type="text"
          required
          {...location}
          id="EventForm__location"
        />
      </div>
      <div className="date_time">
        <label htmlFor="EventForm__date_time">
          Date/Time <Required />
        </label>
        <Input
          name="date_time"
          type="datetime-local"
          pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}"
          value={`${todaysDate}T11:38:00.01`}
          {...date}
          required
          id="EventForm__date_time"
        />
      </div>
      <div className="Additional_information">
        <label htmlFor="EventForm__Additional_information">
          Additional Information
        </label>
        <Textarea
          name="Additional_information"
          id="EventForm__Additional_information"
          cols="30"
          rows="3"
          {...information}
          placeholder="text here..."
        />
      </div>
      <Button type="submit">Create Event</Button>
    </form>
  );
}
