import React from 'react';

import {Section} from '../../components/Utils/Utils';
import Event from '../../components/Event/Event';

export default function EventPage(props) {
  return (
    <Section className="CreateEvent">
      <Event {...props} />
    </Section>
  );
}
