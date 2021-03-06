import React from 'react';
import Home from '../../components/Home/Home';
import {Section} from '../../components/Utils/Utils';

export default function HomePage(props) {
  return (
    <Section className="HomePage">
      <Home {...props} />
    </Section>
  );
}
