import React, {useCallback, useState} from 'react';
import {Button, Input, useFormInput} from '../Utils/Utils';
import eventApiService from '../services/event-api-service';

import SearchEventResults from './SearchEventResults';

export default function SearchEventForm(props) {
  console.log('Search Event Page Ran');
  const [searchByDate, setSearchByDate] = useState(false);
  const [filteredEvents, setFilteredEvents] = useState([]);
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
  const event = {
    name: name.value,
    type: type.value,
    location: location.value,
    date: !!searchByDate
      ? new Date(date.value).getTime() +
        new Date(date.value).getTimezoneOffset()
      : '',
  };
  const checkDate = useCallback(event => {
    let response = false;
    if (event.target.value === 'none' || event.target.value === false) {
      response = false;
    } else {
      response = true;
    }
    setSearchByDate(response);
  }, []);

  const submitSearch = useCallback(() => {
    const getFilteredEvents = async () => {
      const response = await eventApiService.getEventsFiltered(event);
      const data = await response.json();
      setFilteredEvents(data);
    };

    getFilteredEvents();
  }, [event]);

  return (
    <React.Fragment>
      <form
        className="SearchEventForm"
        onSubmit={e => {
          e.preventDefault();
          submitSearch();
        }}
      >
        <div className="event_name" id="focus">
          <label htmlFor="SearchEventForm__event_name">Event Name</label>
          <Input
            name="event_name"
            type="text"
            id="SearchEventForm__event_name"
            {...name}
          />
        </div>
        <div className="event_type">
          <label htmlFor="SearchEventForm__event_type">Event Type</label>
          <Input
            name="event_type"
            type="text"
            id="SearchEventForm__event_type"
            {...type}
          />
        </div>
        <div className="location">
          <label htmlFor="SearchEventForm__location">Location</label>
          <Input
            name="location"
            type="text"
            id="SearchEventForm__location"
            {...location}
          />
        </div>
        <div className="date_time">
          <select name="pickDate" onChange={checkDate}>
            <option value="none">none</option>
            <option value="true">filter by date</option>
          </select>
          <label htmlFor="pickDate">pick a date</label>
          {!!searchByDate ? (
            <Input
              name="date_time"
              type="datetime-local"
              pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}"
              id="SearchEventForm__date_time"
              {...date}
            />
          ) : (
            <p />
          )}
        </div>
        <Button type="submit">Search</Button>
      </form>
      {!!filteredEvents[0] ? (
        <SearchEventResults events={filteredEvents} />
      ) : (
        <p>no results</p>
      )}
    </React.Fragment>
  );
}
