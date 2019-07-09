import React, {useEffect, useState, useCallback} from 'react';

import {Li, Span, MyDateFormat} from '../Utils/Utils';
import {
  findEvent,
  validateUserIsOwner,
  validateUserNotAttending,
} from './utilities';
import UserApiService from '../services/user-api-service';

import UsersAttending from './UsersAttending';

export default function Event({events = [], match: {params}, user = {}}) {
  console.log('render Event');
  const [event, setEvent] = useState({});
  const [loading, setLoading] = useState(true);
  const [eventAttendees, setEventAttendees] = useState([]);
  const [error, setError] = useState('');

  const clearError = () => setError('');

  useEffect(() => {
    const eventFinder = async () => {
      const response = await findEvent(events, params.eventId);
      setEvent(response);
    };
    eventFinder();
  }, [events, params.eventId]);

  useEffect(() => {
    const getAllEventAttendees = async () => {
      console.log('id', event.id);
      const response = await UserApiService.getEventUsers(event.id);
      const data = await response.json();
      setEventAttendees(data);

      setLoading(false);
    };
    if (event.id) {
      getAllEventAttendees();
    }
  }, [event]);

  const deleteAttendee = useCallback(
    idToDelete => {
      clearError();
      console.log('id to delete', idToDelete);
      const validate = validateUserIsOwner(eventAttendees, user);
      console.log('true or false', validate);

      if (validate) {
        UserApiService.deleteEventUser(params.eventId, idToDelete)
          .then(noContent => {
            const newEventAttendees = eventAttendees.filter(
              ae => ae.user_id !== idToDelete
            );
            console.log('remaining attending users', newEventAttendees);
            setEventAttendees(newEventAttendees);
          })
          .catch(error => {
            console.error(error);
          });
      } else {
        setError('You are not the owner of this event');
      }
    },
    [eventAttendees, params.eventId, user]
  );

  const addAttendee = useCallback(() => {
    clearError();
    console.log(eventAttendees);
    const handleAddAttendee = (eventId = '', userId = '') => {
      const newEventUser = {
        event_id: eventId,
        user_id: userId,
        role_id: 2,
      };

      setEventAttendees(eventAttendees => {
        return [...eventAttendees, newEventUser];
      });
    };
    console.log('id to join event', user.id);
    const validate = validateUserNotAttending(eventAttendees, user.id);
    console.log('true or false', validate);

    if (validate) {
      UserApiService.postEventUser(params.eventId, user.id)
        .then(noContent => {
          console.log(params.eventId, user.id);
          handleAddAttendee(params.eventId, user.id);
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      setError('You have already joined this event');
    }
  }, [eventAttendees, params.eventId, user]);

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
      </ul>
      <h3>Attending Users</h3>
      {loading ? (
        <p className="blue">loading...</p>
      ) : (
        <UsersAttending
          eventAttendees={eventAttendees}
          deleteAttendee={deleteAttendee}
          addAttendee={addAttendee}
        />
      )}
      {error ? <p>${error}</p> : <p />}
    </React.Fragment>
  );
}
/* <UsersAttending users={props.users} /> */
