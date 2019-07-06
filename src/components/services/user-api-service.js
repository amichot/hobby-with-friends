import TokenService from '../services/token-service';
import config from '../config';

const UserApiService = {
  getUser() {
    console.log(config);
    return fetch(`${config.API_ENDPOINT}/user/${TokenService.getUserId()}`, {
      headers: {authorization: `bearer ${TokenService.getAuthToken()}`},
    });
  },
  patchUser(text) {
    return fetch(`${config.API_ENDPOINT}/user/${TokenService.getUserId()}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        id: config.USER_ID,
        text,
      }),
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getEventUsers(eventId) {
    return fetch(`${config.API_ENDPOINT}/event-users/${eventId}`, {
      headers: {authorization: `bearer ${TokenService.getAuthToken()}`},
    });
  },

  postEventUser(text) {
    return fetch(`${config.API_ENDPOINT}/event-users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        text,
      }),
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  deleteEventUser(eventId) {
    return fetch(
      `${config.API_ENDPOINT}/event-users/:${eventId}/:${config.USER_ID}`,
      {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
          authorization: `bearer ${TokenService.getAuthToken()}`,
        },
        body: JSON.stringify({
          event_id: config.USER_ID,
          user_id: config.USER_ID,
        }),
      }
    ).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
};

export default UserApiService;
