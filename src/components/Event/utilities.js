export const findEvent = (events, eventId) => {
  const event = events.find(event => {
    return event.id === Number(eventId);
  });

  return event || {};
};
