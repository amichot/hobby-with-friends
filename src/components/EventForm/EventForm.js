import React from 'react';
import {useFormInput, Button, Input, Required, Textarea} from '../Utils/Utils';

export default function EventForm(props) {
  const name = useFormInput('');
  const tags = useFormInput('');
  const location = useFormInput('');
  const date = useFormInput('');
  const information = useFormInput('');
  const event = {
    name: name.value,
    tags: tags.value,
    location: location.value,
    date: date.value,
    information: information.value,
  };

  return (
    <form
      className="EventForm"
      action="#"
      onSubmit={e => {
        e.preventDefault();
        return props.createEvent(event);
      }}
    >
      <div className="event_name">
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
      <div className="event_tags">
        <label htmlFor="EventForm__event_tags">
          Event Tags <Required />
        </label>
        <Input
          name="event_tags"
          type="text"
          {...tags}
          required
          id="EventForm__event_tags"
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
