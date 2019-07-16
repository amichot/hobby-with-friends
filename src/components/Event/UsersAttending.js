import React from 'react';
import {Button, Ul, Li, Span} from '../Utils/Utils';
import {validateUserIsOwner} from './utilities';

function UsersAttending({
  user = {},
  eventAttendees = [],
  deleteAttendee = () => {},
  addAttendee = () => {},
}) {
  const validate = validateUserIsOwner(eventAttendees, user.id);
  let attendees = eventAttendees;
  let displayAttendees = attendees.map(attendee => {
    return (
      <Li key={attendee.user_id}>
        <Span className="attendee">{attendee.profile_name}</Span>{' '}
        {validate ? (
          <Button
            className="remove_user_button"
            type="button"
            value={attendee.user_id}
            onClick={e => {
              e.preventDefault();
              deleteAttendee(e.currentTarget.value);
            }}
          >
            remove
          </Button>
        ) : (
          <Span />
        )}
      </Li>
    );
  });
  return (
    <React.Fragment>
      <Ul className="EventInfo">{displayAttendees}</Ul>
      <Button
        type="button"
        className="join_button"
        onClick={e => {
          e.preventDefault();
          addAttendee();
        }}
      >
        Join Event
      </Button>
    </React.Fragment>
  );
}

export default React.memo(UsersAttending);
