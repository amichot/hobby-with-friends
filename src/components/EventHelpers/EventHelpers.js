export const findEvent = (events, eventId) => {
  return events.find(event => {
    return event.id === Number(eventId.eventid);
  });
};
