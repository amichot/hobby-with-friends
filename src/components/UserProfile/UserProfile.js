import React from 'react';
import {Button, Li, Span} from '../Utils/Utils';

export default function UserProfile(props) {
  return (
    <React.Fragment>
      <ul className="ProfileInfo">
        <Li key="username" className="profile_user_name">
          User Name: <br />
          <Span> JohnnyD </Span>
        </Li>
        <Li key="full_name" className="profile_name">
          Full Name: <br />
          <Span> John Doe </Span>
        </Li>
        <Li key="tags" className="profile_tags">
          Tags: <br />
          <Span> Baseball, Basketball, Weight Lifting, Online Gaming </Span>
        </Li>
        <Li key="email" className="email">
          email: <br />
          <Span>johndoe@gmail.com</Span>
        </Li>
        <Li key="information" className="Additional_information">
          Additional Information: <br />
          <Span>
            Ligula curabitur fermentum turpis ante laoreet amet turpis curabitur
            nec curabitur torquent dolor elementum
          </Span>
        </Li>

        <Button type="submit">Edit Profile</Button>
      </ul>
    </React.Fragment>
  );
}
