import React from 'react';
import {Button, Ul, Li, Span} from '../Utils/Utils';

export default function Event({
  attendingEvent = [],
  deleteUserAttending = () => {},
}) {
  let users = attendingEvent;
  console.log(users);
  let getUsers = users.map(user => {
    return (
      <Li key={user.user_id}>
        <Span className="user">{user.user_name}</Span>{' '}
        <Button
          className="kick"
          type="button"
          value={user.user_id}
          onClick={e => {
            e.preventDefault();
            deleteUserAttending(e.currentTarget.value);
          }}
        >
          remove
        </Button>
      </Li>
    );
  });
  return <Ul className="EventInfo">{getUsers}</Ul>;
}
