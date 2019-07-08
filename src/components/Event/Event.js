import React, {useEffect, useState, useCallback} from 'react';

import {Button, Li, Span, MyDateFormat} from '../Utils/Utils';
import {findEvent, validateUser} from './utilities';
import UserApiService from '../services/user-api-service';

import UsersAttending from './UsersAttending';

export default function Event({events = [], match: {params}, user = {}}) {
  console.log('render Event');
  const [event, setEvent] = useState({});
  const [loading, setLoading] = useState(true);
  const [attendingEvent, setAttendingEvent] = useState([]);

  useEffect(() => {
    const eventFinder = async () => {
      const response = await findEvent(events, params.eventid);
      setEvent(response);
    };
    eventFinder();
  }, [events, params.eventid]);

  useEffect(() => {
    const getAllAttendingEvent = async () => {
      console.log('id', event.id);
      const response = await UserApiService.getEventUsers(event.id);
      const data = await response.json();
      console.log('data', data);
      setAttendingEvent(data);

      setLoading(false);
    };
    if (event.id) {
      getAllAttendingEvent();
    }
  }, [event]);

  const deleteUserAttending = useCallback(
    idToDelete => {
      const validate = validateUser(attendingEvent, user);
      if (validate) {
        UserApiService.deleteEventUser(params.eventid, idToDelete)
          .then(noContent => {
            const newAttendingEvent = attendingEvent.filter(
              ae => ae.user_id !== idToDelete
            );
            setAttendingEvent(newAttendingEvent);
          })
          .catch(error => {
            console.error(error);
          });
      } else {
        return 'You are not the owner of this event';
      }
    },
    [attendingEvent, params.eventid, user]
  );

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
      {loading ? (
        <p className="red">loading...</p>
      ) : (
        <UsersAttending
          attendingEvent={attendingEvent}
          deleteUserAttending={deleteUserAttending}
        />
      )}
    </React.Fragment>
  );
}
/* <UsersAttending users={props.users} /> */
