import React, {Component} from 'react';
import {Section} from '../../components/Utils/Utils';
import UserProfile from '../../components/UserProfile/UserProfile';

export default class UserProfilePage extends Component {
  render() {
    return (
      <Section className="UserProfilePage">
        <h2>My Profile</h2>
        <UserProfile />
      </Section>
    );
  }
}
