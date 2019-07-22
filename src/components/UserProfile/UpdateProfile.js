import React from 'react';

import {useFormInput, Button, Input, Textarea} from '../Utils/Utils';

export default function EditProfile({
  user = {},
  updateUser = () => {},
  error = {},
  ...props
}) {
  const userData = {...user};
  const profile_name = useFormInput(userData.profile_name);
  const type = useFormInput(userData.type);
  const location = useFormInput(userData.location);
  const email = useFormInput(userData.email);
  const about = useFormInput(userData.about_me);

  const newUser = {
    profile_name: profile_name.value,
    type: type.value,
    location: location.value,
    email: email.value,
    about_me: about.value,
  };

  return (
    <form
      className="UserForm"
      action="#"
      onSubmit={e => {
        e.preventDefault();
        updateUser(newUser);
        return props.history.push('/profile');
      }}
    >
      <div className="profile_name" id="focus">
        <label htmlFor="UserForm__profile_name">Profile Name</label>
        <Input
          name="profile_name"
          type="text"
          {...profile_name}
          id="UserForm__user_name"
          required
        />
      </div>
      <div className="user_type">
        <label htmlFor="UserForm__user_type">Type Interests</label>
        <Input
          name="user_type"
          type="text"
          {...type}
          id="UserForm__user_type"
        />
      </div>
      <div className="location">
        <label htmlFor="UserForm__location">Location</label>
        <Input
          name="location"
          type="text"
          {...location}
          id="UserForm__location"
        />
      </div>
      <div className="email">
        <label htmlFor="UserForm__email">Email</label>
        <Input
          name="email"
          type="email"
          {...email}
          id="UserForm__email"
          required
        />
      </div>
      <div className="About_me">
        <label htmlFor="UserForm__About_me">About Me</label>
        <Textarea
          name="About_me"
          id="UserForm__About_me"
          cols="30"
          rows="3"
          {...about}
        />
      </div>
      <Button type="submit">Update</Button>
    </form>
  );
}
