import React, {Suspense, lazy, useEffect, useState, useCallback} from 'react';
import {Switch} from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link';

import userApiService from '../services/user-api-service';
import eventApiService from '../services/event-api-service';
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
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [eventsHolder, setEventsHolder] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [usersEvents, setUsersEvents] = useState([]);
  const [user, setUser] = useState({});
  const [error, setError] = useState({});

  const handleAddEvent = useCallback(
    event => {
      const newEvent = {
        owner_id: user.id,
        name: event.name,
        type: event.type,
        location: event.location,
        date: event.date,
        information: event.information,
      };
      eventApiService.postEvent(newEvent).then(res =>
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
      const response = await eventApiService.getEvents();
      const data = await response.json();

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
            name: <Link to={`/event/${event.id}#focus`}>{event.name}</Link>,
            date: MyDateFormat(event.date),
          };
        })
      );
    };
    if (!!user.id) {
      copyEvents();
    }
  }, [user, events]);

  useEffect(() => {
    setLoading(true);
    const getUserInfo = async () => {
      const response = await userApiService.getUser();
      const data = await response.json();

      setUser(data);
    };

    getUserInfo();
    setLoading(false);
  }, []);

  const handleUpdateUser = useCallback(
    newUser => {
      const newUserData = {
        id: user.id,
        profile_name: newUser.profile_name,
        type: newUser.type,
        location: newUser.location,
        email: newUser.email,
        about_me: newUser.about_me,
      };
      const patchUserData = async () => {
        setError({});
        const response = await userApiService.patchUser(newUserData);
        const data = await response.ok;
        !!data ? setUser(newUserData) : setError(data);
      };
      patchUserData(newUserData);
    },
    [user.id]
  );
  useEffect(() => {
    setLoading(true);
    const eventHolderData = [...eventsHolder];
    const userOwnedEvents = eventHolderData.filter(event => {
      return event.owner_id === user.id;
    });
    setUsersEvents(userOwnedEvents);
    setLoading(false);
  }, [eventsHolder, user]);

  useEffect(() => {
    const usersType = {
      type: user.type,
    };
    const searchUserType = async () => {
      setLoading(true);
      const response = await eventApiService.getEventsFiltered(usersType);
      const data = await response.json();
      setFilteredEvents(
        data.map(event => {
          return {
            ...event,
            name: <Link to={`/event/${event.id}#event`}>{event.name}</Link>,
            date: MyDateFormat(event.date),
          };
        })
      );
    };
    if (!!user.id) {
      searchUserType();
      setLoading(false);
    }
  }, [user]);

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
                error={error}
              />
            )}
          />
        </Switch>
      </Suspense>
    );
  };

  return (
    <React.Fragment>
      <h3>My Events </h3>
      <Table className="UserEventTable" data={usersEvents} columns={columns} />
      <h3 id="recommended-events">Recommended Events</h3>
      <p id="hint">(Edit Your interests in profile for related events)</p>
      <Table data={filteredEvents} columns={columns} />
      {loading ? <p className="red">loading...</p> : renderMainRoutes()}
    </React.Fragment>
  );
}
