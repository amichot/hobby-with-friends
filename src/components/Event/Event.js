import React, {useEffect, useState, useCallback} from 'react';

import {Li, Span, MyDateFormat} from '../Utils/Utils';
import {
  findEvent,
  validateUserIsOwner,
  validateUserNotAttending,
} from './utilities';
import UserApiService from '../services/user-api-service';

import UsersAttending from './UsersAttending';

function Event({events = [], match: {params}, user = {}}) {
  const [event, setEvent] = useState({});
  const [loading, setLoading] = useState(true);
  const [eventAttendees, setEventAttendees] = useState([]);
  const [error, setError] = useState(null);

  const clearError = () => setError('');

  useEffect(() => {
    const eventFinder = async () => {
      const response = await findEvent(events, params.eventId);
      setEvent(response);
    };
    if (!!events) {
      eventFinder();
    }
  }, [events, params.eventId]);

  useEffect(() => {
    const getAllEventAttendees = async () => {
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

      const validate = validateUserIsOwner(eventAttendees, idToDelete);

      if (validate) {
        UserApiService.deleteEventUser(params.eventId, idToDelete)
          .then(noContent => {
            const newEventAttendees = eventAttendees.filter(
              ae => ae.user_id !== idToDelete
            );

            setEventAttendees(newEventAttendees);
          })
          .catch(error => {
            setError(error);
          });
      } else {
        setError(
          'You cannot remove the owner of the event, consider using the additional information section to specify that you will not be attending.'
        );
      }
    },
    [params.eventId, eventAttendees]
  );

  const addAttendee = useCallback(() => {
    clearError();

    const handleAddAttendee = () => {
      const newEventUser = {
        event_id: params.eventId,
        user_id: user.id,
        role_id: 2,
        profile_name: user.profile_name,
      };

      setEventAttendees(eventAttendees => {
        return [...eventAttendees, newEventUser];
      });
    };

    const validate = validateUserNotAttending(eventAttendees, user.id);

    if (!!validate) {
      UserApiService.postEventUser(params.eventId, user.id)
        .then(noContent => {
          handleAddAttendee(params.eventId, user.id);
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      setError(`You are already attending ${event.name}`);
    }
  }, [event.name, eventAttendees, params.eventId, user]);

  return (
    <React.Fragment>
      <ul className="EventInfo" id="event">
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
      <h3 id="focus">Attending Users</h3>
      {!!loading ? (
        <p className="blue">loading...</p>
      ) : (
        <UsersAttending
          user={user}
          eventAttendees={eventAttendees}
          deleteAttendee={deleteAttendee}
          addAttendee={addAttendee}
        />
      )}
      {error ? <p>{error}</p> : <p />}
    </React.Fragment>
  );
}

export default React.memo(Event);
