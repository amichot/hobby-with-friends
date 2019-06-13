import React from 'react';

import {Button, Li, Span} from '../Utils/Utils';
import {findEvent} from '../EventHelpers/EventHelpers';
import UsersAttending from './UsersAttending';

export default function Event(props) {
  const getEvent = findEvent(props.events, props.match.params);

  return (
    <React.Fragment>
      <ul className="EventInfo">
        <Li key="name" className="event_name">
          Event Name: <br />
          <Span> {getEvent.name} </Span>
        </Li>
        <Li key="tags" className="event_tags">
          Event Tags: <br />
          <Span> {getEvent.tags} </Span>
        </Li>
        <Li key="location" className="location">
          Event Location: <br />
          <Span>{getEvent.location}</Span>
        </Li>
        <Li key="date" className="date_time">
          Date/Time: <br />
          <Span> {getEvent.date} </Span>
        </Li>
        <Li key="information" className="Additional_information">
          Additional Information: <br />
          <Span>{getEvent.information}</Span>
        </Li>

        <Button type="submit">Join Event</Button>
      </ul>
      <h3>Attending Users</h3>
      <UsersAttending users={props.users} />
    </React.Fragment>
  );
}
