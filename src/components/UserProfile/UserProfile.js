import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Li, Span} from '../Utils/Utils';

export default function UserProfile(props) {
  return (
    <React.Fragment>
      <ul className="ProfileInfo">
        <Li key="username" className="profile_user_name">
          User Name: <br />
          <Span> {props.user.name} </Span>
        </Li>
        <Li key="full_name" className="profile_name">
          Full Name: <br />
          <Span> {props.user['full-name']} </Span>
        </Li>
        <Li key="tags" className="profile_tags">
          Tags: <br />
          <Span> {props.user.tags} </Span>
        </Li>
        <Li key="email" className="email">
          email: <br />
          <Span>{props.user.email}</Span>
        </Li>
        <Li key="information" className="about_me">
          About Me: <br />
          <Span>{props.user['about-me']}</Span>
        </Li>
      </ul>
      <Button type="button">
        <Link to="/update-profile">Update Profile</Link>
      </Button>
    </React.Fragment>
  );
}
