import React, {useState} from 'react';
import {Route, Switch} from 'react-router-dom';

import Header from '../Header/Header';
import LoginPage from '../../routes/LoginPage/LoginPage';
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage';
import HomePage from '../../routes/HomePage/HomePage';
import CreateEventPage from '../../routes/CreateEventPage/CreateEventPage';
import SearchEventPage from '../../routes/SearchEventPage/SearchEventPage';
import EventPage from '../../routes/EventPage/EventPage';
import UserProfilePage from '../../routes/UserProfilePage/UserProfilePage';
import {MyDateFormat} from '../Utils/Utils';

import './App.css';

function App(props) {
  const newEvent = [
    {
      id: 1,
      name: 'Basketball 3v3',
      tags: 'basketball',
      location: '1501 Dave Dixon Dr, New Orleans LA 70113 United States',
      date: MyDateFormat(new Date()),
      information:
        'Want eight people total for one sub on each team. Get there 30 minutes early for warmups',
    },
    {
      id: 2,
      name: 'Sand Volleyball',
      tags: 'volleyball',
      location: '123 VolleyBall Lane, Los Angeles, CA 12345 United States',
      date: MyDateFormat(new Date()),
      information: 'Looking for 5 people total for some fun in the sun',
    },
  ];
  const testUsers = [
    {id: 1, name: 'Jake'},
    {id: 2, name: 'Sally'},
    {id: 3, name: 'Bill'},
    {id: 4, name: 'Carl'},
    {id: 5, name: 'Bobby'},
  ];

  const [events, setEvents] = useState(newEvent);
  const [users, setUsers] = useState(testUsers);

  function updateEvents(e) {
    return setEvents(e);
  }

  function updateUsers(e) {
    return setUsers(e);
  }

  function addEvent(e = {}) {
    const newEvents = events;
    newEvents.push({
      id: events.length + 1,
      name: e.name,
      tags: e.tags,
      location: e.location,
      date: e.date,
      information: e.information,
    });
    updateEvents(newEvents);
    return newEvents;
  }

  return (
    <div className="App">
      <header className="main-content">
        <Header />
      </header>
      <main className="main">
        {
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegistrationPage} />
            <Route
              path="/home"
              render={routeProps => (
                <HomePage {...routeProps} events={events} />
              )}
            />
            <Route
              path="/create"
              render={routeProps => (
                <CreateEventPage
                  {...routeProps}
                  createEvent={e => addEvent(e)}
                />
              )}
            />
            <Route
              path="/search"
              render={routeProps => (
                <SearchEventPage {...routeProps} events={events} />
              )}
            />
            <Route
              path="/event/:eventid"
              render={routeProps => (
                <EventPage {...routeProps} events={events} users={users} />
              )}
            />
            <Route path="/profile" component={UserProfilePage} />
          </Switch>
        }
      </main>
    </div>
  );
}

export default App;
