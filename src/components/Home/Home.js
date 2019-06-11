import React from 'react';

import {Table} from '../Utils/Utils';

import 'react-table/react-table.css';

export default function Home(props) {
  const data = props.events;

  const columns = [
    {
      Header: 'id',
      accessor: 'id',
    },
    {
      Header: 'Name',
      accessor: 'name',
    },
    {Header: 'Location', accessor: 'location'},
    {Header: 'Date/Time', accessor: 'date'},
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
