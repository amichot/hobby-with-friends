import React, {Suspense, lazy, useEffect, useState, useCallback} from 'react';
import {Link, Switch} from 'react-router-dom';

import UserApiService from '../services/user-api-service';
import EventApiService from '../services/event-api-service';
import {Table, MyDateFormat} from '../Utils/Utils';

const PrivateRoute = lazy(() => import('../Utils/PrivateRoute'));
const EventPage = lazy(() => import('../../routes/EventPage/EventPage'));
const CreateEventPage = lazy(() =>
  import('../../routes/CreateEventPage/CreateEventPage')
);
const SearchEventPage = lazy(() =>
  import('../../routes/SearchEventPage/SearchEventPage')
);
const UserProfilePage = lazy(() =>
  import('../../routes/UserProfilePage/UserProfilePage')
);
const UpdateProfilePage = lazy(() =>
  import('../../routes/UserProfilePage/UpdateProfilePage')
);

export default function Home() {
  //useCallback for passing prop functions
  console.log('render Home');

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [eventsHolder, setEventsHolder] = useState([]);
  const [user, setUser] = useState({});

  const handleAddEvent = useCallback(
    event => {
      console.log('new Event', event);
      const newEvent = {
        owner_id: user.id,
        name: event.name,
        type: event.type,
        location: event.location,
        date: event.date,
        information: event.information,
      };
      EventApiService.postEvent(newEvent).then(res =>
        setEvents(events => {
          return [
            ...events,
            {
              id: res.id,
              owner_id: user.id,
              owner_name: user.profile_name,
              name: res.name,
              type: res.type,
              location: res.location,
              date: res.date,
              information: res.information,
            },
          ];
        })
      );
    },
    [user]
  );

  useEffect(() => {
    const getAllEvents = async () => {
      const response = await EventApiService.getEvents();
      const data = await response.json();
      console.log('data', data);
      setEvents(data);
      setLoading(false);
    };
    getAllEvents();
  }, []);

  useEffect(() => {
    const copyEvents = async () => {
      const data = [...events];
      setEventsHolder(
        data.map(event => {
          return {
            ...event,
            name: <Link to={`/event/${event.id}`}>{event.name}</Link>,
            date: MyDateFormat(event.date),
          };
        })
      );
    };
    if (!!events) {
      copyEvents();
    }
  }, [events]);

  useEffect(() => {
    const getUserInfo = async () => {
      const response = await UserApiService.getUser();
      const data = await response.ok;
      console.log('user', data);

      setUser(data);
    };
    getUserInfo();
  }, []);

  const handleUpdateUser = useCallback(
    newUser => {
      console.log('new User Data', newUser);
      const newUserData = {
        id: user.id,
        profile_name: newUser.profile_name,
        type: newUser.type,
        location: newUser.location,
        email: newUser.email,
        about_me: newUser.about_me,
      };
      const patchUserData = async () => {
        const response = await UserApiService.patchUser(newUserData);
        const data = await response;
        console.log('newUser data', data);
        setUser(newUserData);
      };
      patchUserData(newUserData);
    },
    [user.id]
  );

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
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <PrivateRoute
            path="/create"
            render={routeProps => (
              <CreateEventPage {...routeProps} addEvent={handleAddEvent} />
            )}
          />
          <PrivateRoute
            path="/search"
            render={routeProps => (
              <SearchEventPage {...routeProps} events={events} />
            )}
          />

          <PrivateRoute
            path="/event/:eventId"
            render={routeProps => (
              <EventPage {...routeProps} events={events} user={user} />
            )}
          />

          <PrivateRoute
            path="/profile"
            render={routeProps => (
              <UserProfilePage {...routeProps} user={user} />
            )}
          />
          <PrivateRoute
            path="/update-profile"
            render={routeProps => (
              <UpdateProfilePage
                {...routeProps}
                user={user}
                updateUser={handleUpdateUser}
              />
            )}
          />
        </Switch>
      </Suspense>
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
