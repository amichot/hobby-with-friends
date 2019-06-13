import React from 'react';
import {Link} from 'react-router-dom';

import {Table} from '../Utils/Utils';

export default function Home(props) {
  props.events.forEach(e => {
    e['name'] = <Link to={`/event/${e['id']}`}>{e['name']}</Link>;
  });

  const data = props.events;

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
  return (
    <React.Fragment>
      <h3>My Events</h3>
      <Table className="UserEventTable" data={data} columns={columns} />
      <h3>Recommended Events</h3>
      <Table data={data} columns={columns} />
    </React.Fragment>
  );
}
