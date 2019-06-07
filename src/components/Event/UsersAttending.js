import React, {Component} from 'react';
import {Button, Ul, Li, Span} from '../Utils/Utils';

export default class Event extends Component {
  render() {
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
}
