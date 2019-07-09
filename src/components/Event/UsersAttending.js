import React from 'react';
import {Button, Ul, Li, Span} from '../Utils/Utils';

export default function Event({
  eventAttendees = [],
  deleteAttendee = () => {},
  addAttendee = () => {},
}) {
  let users = eventAttendees;
  console.log(users);
  let getUsers = users.map(user => {
    return (
      <Li key={user.user_id}>
        <Span className="user">{user.user_name}</Span>{' '}
        <Button
          className="remove_user_button"
          type="button"
          value={user.user_id}
          onClick={e => {
            e.preventDefault();
            deleteAttendee(e.currentTarget.value);
          }}
        >
          remove
        </Button>
      </Li>
    );
  });
  return (
    <React.Fragment>
      <Ul className="EventInfo">{getUsers}</Ul>
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
