import React from 'react';
import {Button, Li, Span, MyDateFormat} from '../Utils/Utils';
import UsersAttending from './UsersAttending';

export default function Event(props) {
  let users = ['John', 'Jake', 'Sam', 'Bill'];
  return (
    <React.Fragment>
      <ul className="EventInfo">
        <Li key="name" className="event_name">
          Event Name: <br />
          <Span> John Doe </Span>
        </Li>
        <Li key="tags" className="event_tags">
          Event Tags: <br />
          <Span> Baseball, Basketball, Weight Lifting, Online Gaming </Span>
        </Li>
        <Li key="location" className="location">
          Event Location: <br />
          <Span>1501 Dave Dixon Dr New Orleans, LA 70113 United States</Span>
        </Li>
        <Li key="date" className="date_time">
          Date/Time: <br />
          <Span> {MyDateFormat(new Date('2019-06-17T13:24:00'))} </Span>
        </Li>
        <Li key="information" className="Additional_information">
          Additional Information: <br />
          <Span>
            Ligula curabitur fermentum turpis ante laoreet amet turpis curabitur
            nec curabitur torquent dolor elementum
          </Span>
        </Li>

        <Button type="submit">Join Event</Button>
      </ul>
      <h3>Attending Users</h3>
      <UsersAttending users={users} />
    </React.Fragment>
  );
}
