import React from 'react';
import Home from '../../components/Home/Home';
import {Section} from '../../components/Utils/Utils';

export default function LoginPage(props) {
  console.log(props);
  return (
    <Section className="HomePage">
      <h2>Home Page</h2>
      <Home events={props.events} />
    </Section>
  );
}
