export const findEvent = (events, eventId) => {
  const event = events.find(event => {
    return event.id === Number(eventId);
  });

  return event || {};
};

export const validateUserIsOwner = (eventAttendees, userId) => {
  let validateUser = false;
  eventAttendees.forEach(e => {
    if (e.user_id === userId) {
      validateUser = e.role_id === 1;
    }
  });
  return validateUser;
};

export const validateUserNotAttending = (eventAttendees, userId) => {
  let validateUser = true;
  eventAttendees.forEach(eventAttendee => {
    if (eventAttendee.user_id === userId) {
      validateUser = false;
    }
  });
  return validateUser;
};
