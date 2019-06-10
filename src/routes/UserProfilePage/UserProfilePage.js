import React from 'react';
import {Section} from '../../components/Utils/Utils';
import UserProfile from '../../components/UserProfile/UserProfile';

export default function UserProfilePage(props) {
  return (
    <Section className="UserProfilePage">
      <h2>My Profile</h2>
      <UserProfile />
    </Section>
  );
}
