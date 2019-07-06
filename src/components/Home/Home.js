import React, {useEffect, useState} from 'react';
import {Link, Switch} from 'react-router-dom';

import PrivateRoute from '../Utils/PrivateRoute';

import CreateEventPage from '../../routes/CreateEventPage/CreateEventPage';
import SearchEventPage from '../../routes/SearchEventPage/SearchEventPage';
import EventPage from '../../routes/EventPage/EventPage';
import UserProfilePage from '../../routes/UserProfilePage/UserProfilePage';
import UpdateProfilePage from '../../routes/UserProfilePage/UpdateProfilePage';

import UserApiService from '../services/user-api-service';
import EventApiService from '../services/event-api-service';
import {Table, MyDateFormat} from '../Utils/Utils';

export default function Home() {
  //useCallback for passing prop functions
  console.log('render Home');

  const testUsers = [
    {
      id: 1,
      name: 'testUserClient',
      'full-name': 'test user',
      type: 'baseball, basketball, weight lifting, online gaming',
      location: 'New York',
      email: 'jake123@gmail.com',
      'about-me': 'Hello World',
    },
    {id: 2, name: 'Sally'},
    {id: 3, name: 'Bill'},
    {id: 4, name: 'Carl'},
    {id: 5, name: 'Bobby'},
  ];

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(testUsers);
  const [eventsHolder, setEventsHolder] = useState([]);

  function updateUsers(e) {
    return setUser(e);
  }

  function handleAddEvent(e = {}) {
    const newEvent = {
      id: events.length + 1,
      name: e.name,
      type: e.type,
      location: e.location,
      date: e.date,
      information: e.information,
    };

    setEvents(events => {
      return [...events, newEvent];
    });
  }

  function handleUpdateUser(updatedUser = {}) {
    const newUsers = testUsers.map(user =>
      user.id === updatedUser.id ? updatedUser : user
    );
    updateUsers(newUsers);
    return newUsers;
  }

  useEffect(() => {
    const getAllEvents = async () => {
      const response = await EventApiService.getEvents();
      const data = await response.json();
      console.log('data', data);
      setEvents(data);
      setEventsHolder(
        data.map(event => {
          return {
            ...event,
            name: <Link to={`/event/${event.id}`}>{event.name}</Link>,
            date: MyDateFormat(event.date),
          };
        })
      );
      setLoading(false);
    };
    getAllEvents();
  }, []);

  useEffect(() => {
    const getUserInfo = async () => {
      const response = await UserApiService.getUser();
      const data = await response.json();
      console.log('user', data);

      setUser(data);
    };
    getUserInfo();
  }, []);

  const columns = [
    {
      Header: 'Name',
      accessor: 'name',
      maxWidth: 280,
      minWidth: 150,
    },
    {Header: 'Location', accessor: 'location', maxWidth: 600},
    {Header: 'Date/Time', accessor: 'date', maxWidth: 180},
  ];

  const renderMainRoutes = () => {
    return (
      <Switch>
        <PrivateRoute
          path="/create"
          render={routeProps => (
            <CreateEventPage
              {...routeProps}
              addEvent={e => handleAddEvent(e)}
            />
          )}
        />
        <PrivateRoute
          path="/search"
          render={routeProps => (
            <SearchEventPage {...routeProps} events={events} />
          )}
        />
        <PrivateRoute
          path="/event/:eventid"
          render={routeProps => (
            <EventPage {...routeProps} events={events} users={user} />
          )}
        />
        <PrivateRoute
          path="/profile"
          render={routeProps => <UserProfilePage {...routeProps} user={user} />}
        />
        <PrivateRoute
          path="/profile"
          render={routeProps => (
            <UpdateProfilePage
              {...routeProps}
              user={user}
              updateUser={e => handleUpdateUser(e)}
            />
          )}
        />
      </Switch>
    );
  };

  return (
    <React.Fragment>
      <h3>My Events</h3>
      <Table className="UserEventTable" data={eventsHolder} columns={columns} />
      <h3>Recommended Events</h3>
      <Table data={eventsHolder} columns={columns} />
      {loading ? <p className="red">loading...</p> : renderMainRoutes()}
    </React.Fragment>
  );
}
