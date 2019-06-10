import React from 'react';
import {Button, Ul, Li, Span} from '../Utils/Utils';

export default function Event(props) {
  let users = this.props.users;
  let getUsers = users.map(user => {
    return (
      <Li>
        <Span className="user">{user}</Span>{' '}
        <Button className="kick" type="submit">
          remove
        </Button>
      </Li>
    );
  });
  return <Ul className="EventInfo">{getUsers}</Ul>;
}
