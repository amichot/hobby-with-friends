export const findEvent = (events, eventId) => {
  const event = events.find(event => {
    return event.id === Number(eventId);
  });

  return event || {};
};

export const validateUser = (attendingEvent, user) => {
  let validateUser = false;
  attendingEvent.forEach(e => {
    if (e.user_id === user.id) {
      validateUser = e.role_id === 1;
    }
  });
  return validateUser;
};
