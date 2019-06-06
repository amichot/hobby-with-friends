import React, {Component} from 'react';
import {Button, Input} from '../Utils/Utils';

export default class SearchEventForm extends Component {
  render() {
    return (
      <form className="SearchEventForm">
        <div className="event_name">
          <label htmlFor="SearchEventForm__event_name">Event Name</label>
          <Input
            name="event_name"
            type="text"
            id="SearchEventForm__event_name"
          />
        </div>
        <div className="event_tags">
          <label htmlFor="SearchEventForm__event_tags">Event Tags</label>
          <Input
            name="event_tags"
            type="text"
            id="SearchEventForm__event_tags"
          />
        </div>
        <div className="location">
          <label htmlFor="SearchEventForm__location">Location</label>
          <Input name="location" type="text" id="SearchEventForm__location" />
        </div>
        <div className="date_time">
          <label htmlFor="SearchEventForm__date_time">Date/Time</label>
          <Input
            name="date_time"
            type="datetime-local"
            pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}"
            id="SearchEventForm__date_time"
          />
        </div>
        <Button type="submit">Create Event</Button>
      </form>
    );
  }
}
