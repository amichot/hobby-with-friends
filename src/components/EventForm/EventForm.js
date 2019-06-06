import React, {Component} from 'react';
import {Button, Input, Required, Textarea} from '../Utils/Utils';

export default class EventForm extends Component {
  render() {
    return (
      <form className="EventForm">
        <div className="event_name">
          <label htmlFor="EventForm__event_name">
            Event Name <Required />
          </label>
          <Input
            name="event_name"
            type="text"
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
            placeholder="text here..."
          />
        </div>
        <Button type="submit">Create Event</Button>
      </form>
    );
  }
}
