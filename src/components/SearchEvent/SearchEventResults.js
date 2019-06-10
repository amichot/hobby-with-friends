import React from 'react';

import {Table, MyDateFormat} from '../Utils/Utils';

import 'react-table/react-table.css';

export default function SearchEventResults(props) {
  const data = [
    {
      name: 'Friday Night Basketball',
      location: '275 S River Rd, Port Allen, LA',
      date: MyDateFormat(new Date()),
    },
    {
      name: 'Flag Football 5v5',
      location: 'Andolsek Park 1200 Canal Blvd Thibodaux LA 70301',
      date: MyDateFormat(new Date('2019-06-17T13:24:00')),
    },
    {
      name: 'Workout Partner',
      location: '275 S River Rd, Port Allen, LA',
      date: MyDateFormat(new Date('2019-07-07T11:30:00')),
    },
  ];
  const columns = [
    {
      Header: 'Name',
      accessor: 'name',
    },
    {Header: 'Location', accessor: 'location'},
    {Header: 'Date/Time', accessor: 'date'},
  ];
  return (
    <React.Fragment>
      <h3>Search Results</h3>
      <Table className="SearchResults" data={data} columns={columns} />
    </React.Fragment>
  );
}
