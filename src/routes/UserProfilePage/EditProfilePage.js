import React from 'react';
import {Section} from '../../components/Utils/Utils';
import EditProfile from '../../components/UserProfile/UpdateProfile';

export default function EditProfilePage(props) {
  return (
    <Section className="EditProfilePage">
      <h2>Update Profile</h2>
      <EditProfile {...props} />
    </Section>
  );
}
