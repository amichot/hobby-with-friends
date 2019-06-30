import React from 'react';
import {Link} from 'react-router-dom';

import {Table, MyDateFormat} from '../Utils/Utils';

export default function Home(props) {
  const data = props.events;
  console.log(data);

  data.forEach(e => {
    e['name'] = <Link to={`/event/${e['id']}`}>{e['name']}</Link>;
    e['date'] = MyDateFormat(e['date']);
  });

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
