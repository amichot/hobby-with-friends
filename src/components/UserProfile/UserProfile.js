import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Li, Span} from '../Utils/Utils';

export default function UserProfile({user = {}}) {
  return (
    <React.Fragment>
      <ul className="ProfileInfo">
        <Li key="profile_name" className="profile_user_name">
          Profile Name: <br />
          <Span> {user.profile_name} </Span>
        </Li>
        <Li key="type" className="profile_type">
          Type of Interests: <br />
          <Span> {user.type} </Span>
        </Li>
        <Li key="location" className="location">
          Location: <br />
          <Span>{user.location}</Span>
        </Li>
        <Li key="email" className="email">
          email: <br />
          <Span>{user.email}</Span>
        </Li>
        <Li key="about_me" className="about_me">
          About Me: <br />
          <Span>{user.about_me}</Span>
        </Li>
      </ul>
      <Button type="button">
        <Link to="/update-profile">Update Profile</Link>
      </Button>
    </React.Fragment>
  );
}
