import React from 'react';
import {Section} from '../../components/Utils/Utils';
import SearchEventForm from '../../components/SearchEvent/SearchEventForm';

export default function LoginPage(props) {
  return (
    <Section className="SearchEvent">
      <h2>Search Event</h2>
      <SearchEventForm />
    </Section>
  );
}
