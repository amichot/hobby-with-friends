import React, {Component} from 'react';
import {Section} from '../../components/Utils/Utils';
import SearchEventForm from '../../components/SearchEvent/SearchEventForm';
import SearchEventResults from '../../components/SearchEvent/SearchEventResults';

export default class LoginPage extends Component {
  render() {
    return (
      <Section className="SearchEvent">
        <h2>Search Event</h2>
        <SearchEventForm />
        <SearchEventResults />
      </Section>
    );
  }
}
