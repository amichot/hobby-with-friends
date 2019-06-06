import React, {Component} from 'react';
import Home from '../../components/Home/Home';
import {Section} from '../../components/Utils/Utils';

export default class LoginPage extends Component {
  render() {
    return (
      <Section className="HomePage">
        <h2>Home Page</h2>
        <Home />
      </Section>
    );
  }
}
