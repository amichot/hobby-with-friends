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
import UpdateProfilePage from '../../routes/UserProfilePage/UpdateProfilePage';

import './App.css';

function App(props) {
  var start = Date.now();
  console.log(start);
  const newEvent = [
    {
      id: 1,
      owner: 1,
      name: 'Basketball 3v3',
      type: 'basketball',
      location: '1501 Dave Dixon Dr, New Orleans LA 70113 United States',
      date: start,
      information:
        'Want eight people total for one sub on each team. Get there 30 minutes early for warmups',
      attending: [1, 2, 5],
    },
    {
      id: 2,
      owner: 2,
      name: 'Sand Volleyball',
      type: 'volleyball',
      location: '123 VolleyBall Lane, Los Angeles, CA 12345 United States',
      date: start,
      information: 'Looking for 5 people total for some fun in the sun',
      attending: [1, 2, 5],
    },
  ];
  const testUsers = [
    {
      id: 1,
      name: 'Jake123',
      'full-name': 'Jake Doe',
      type: 'baseball, basketball, weight lifting, online gaming',
      location: 'New York',
      email: 'jake123@gmail.com',
      'about-me':
        'Ligula curabitur fermentum turpis ante laoreet amet turpis curabitur nec curabitur torquent dolor elementum',
    },
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

  function handleAddEvent(e = {}) {
    const newEvents = events;
    newEvents.push({
      id: events.length + 1,
      name: e.name,
      type: e.type,
      location: e.location,
      date: e.date,
      information: e.information,
    });
    updateEvents(newEvents);
    return newEvents;
  }

  function handleUpdateUser(updatedUser = {}) {
    const newUsers = testUsers.map(user =>
      user.id === updatedUser.id ? updatedUser : user
    );
    updateUsers(newUsers);
    return newUsers;
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
              exact
              path="/"
              render={routeProps => (
                <HomePage {...routeProps} events={events} />
              )}
            />
            <Route
              path="/create"
              render={routeProps => (
                <CreateEventPage
                  {...routeProps}
                  addEvent={e => handleAddEvent(e)}
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
            <Route
              path="/profile"
              render={routeProps => (
                <UserProfilePage {...routeProps} user={users[0]} />
              )}
            />
            <Route
              path="/update-profile"
              render={routeProps => (
                <UpdateProfilePage
                  {...routeProps}
                  user={users[0]}
                  updateUser={e => handleUpdateUser(e)}
                />
              )}
            />
          </Switch>
        }
      </main>
    </div>
  );
}

export default App;
