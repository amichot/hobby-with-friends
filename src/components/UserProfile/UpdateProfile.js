import React from 'react';

import {useFormInput, Button, Input, Textarea} from '../Utils/Utils';

export default function EditProfile(props) {
  const name = useFormInput(props.user.name);
  const fullName = useFormInput(props.user['full-name']);
  const tags = useFormInput(props.user.tags);
  const location = useFormInput(props.user.location);
  const email = useFormInput(props.user.email);
  const about = useFormInput(props.user['about-me']);

  const user = {
    id: props.user.id,
    name: name.value,
    'full-name': fullName.value,
    tags: tags.value,
    location: location.value,
    email: email.value,
    'about-me': about.value,
  };
  console.log(user);

  return (
    <form
      className="UserForm"
      action="#"
      onSubmit={e => {
        e.preventDefault();
        props.updateUser(user);
        return props.history.push('/profile');
      }}
    >
      <div className="user_name">
        <label htmlFor="UserForm__user_name">User Name</label>
        <Input
          name="user_name"
          type="text"
          {...name}
          required
          id="UserForm__user_name"
        />
      </div>
      <div className="full_name">
        <label htmlFor="UserForm__full_name">Full Name</label>
        <Input
          name="full_name"
          type="text"
          {...fullName}
          required
          id="UserForm__full_name"
        />
      </div>
      <div className="user_tags">
        <label htmlFor="UserForm__user_tags">User Tags</label>
        <Input
          name="user_tags"
          type="text"
          {...tags}
          required
          id="UserForm__user_tags"
        />
      </div>
      <div className="location">
        <label htmlFor="UserForm__location">Location</label>
        <Input
          name="location"
          type="text"
          required
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
          required
          id="UserForm__email"
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
