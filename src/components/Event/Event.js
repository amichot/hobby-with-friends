import React, {useEffect, useState} from 'react';

import {Button, Li, Span, MyDateFormat} from '../Utils/Utils';
import {findEvent} from './utilities';

export default function Event({events = [], match: {params}}) {
  console.log('render Event');
  const [event, setEvent] = useState({});

  useEffect(() => {
    setEvent(findEvent(events, params.eventid));
  }, [events, params.eventid]);

  return (
    <React.Fragment>
      <ul className="EventInfo">
        <Li key="name" className="event_name">
          <h2> {event.name} </h2>
        </Li>
        <Li key="type" className="event_type">
          Event Type: <br />
          <Span> {event.type} </Span>
        </Li>
        <Li key="location" className="location">
          Event Location: <br />
          <Span>{event.location}</Span>
        </Li>
        <Li key="date" className="date_time">
          Date/Time: <br />
          <Span> {MyDateFormat(event.date)} </Span>
        </Li>
        <Li key="information" className="Additional_information">
          Additional Information: <br />
          <Span>{event.information}</Span>
        </Li>

        <Button type="button">Join Event</Button>
      </ul>
      <h3>Attending Users</h3>
    </React.Fragment>
  );
}
/* <UsersAttending users={props.users} /> */
