import TokenService from '../services/token-service';
import config from '../config';

const EventApiService = {
  getAllEvents() {
    return fetch(`${config.API_ENDPOINT}/event`, {
      headers: {authorization: `bearer ${TokenService.getAuthToken()}`},
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getItem(route, id) {
    return fetch(`${config.API_ENDPOINT}/${route}/${id}`, {
      headers: {authorization: `bearer ${TokenService.getAuthToken()}`},
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  postEvent(text) {
    return fetch(`${config.API_ENDPOINT}/event`, {
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
  deleteItem(route, eventId) {
    return fetch(`${config.API_ENDPOINT}/${route}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        id: eventId,
      }),
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  patchItem(route, eventId, text) {
    return fetch(`${config.API_ENDPOINT}/${route}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        id: eventId,
        text,
      }),
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getEventsFiltered(text) {
    return fetch(`${config.API_ENDPOINT}/event/filter`, {
      headers: {authorization: `bearer ${TokenService.getAuthToken()}`},
      body: JSON.stringify({
        text,
      }),
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
};

export default EventApiService;
