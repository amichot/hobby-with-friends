import TokenService from '../services/token-service';
import config from '../config';

const EventApiService = {
  getEvents() {
    return fetch(`${config.API_ENDPOINT}/event`, {
      headers: {authorization: `bearer ${TokenService.getAuthToken()}`},
    });
  },
  getEvent(id) {
    return fetch(`${config.API_ENDPOINT}/event/id/${id}`, {
      headers: {authorization: `bearer ${TokenService.getAuthToken()}`},
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  postEvent(event) {
    return fetch(`${config.API_ENDPOINT}/event`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        event,
      }),
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  deleteEvent(eventId) {
    return fetch(`${config.API_ENDPOINT}/event/id/:${eventId}`, {
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
  patchEvent(eventId, text) {
    return fetch(`${config.API_ENDPOINT}/event/id/:${eventId}`, {
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
      method: 'post',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        name: text.name || '',
        type: text.type || '',
        location: text.location || '',
        date: text.date || '',
      }),
    });
  },
};

export default EventApiService;
