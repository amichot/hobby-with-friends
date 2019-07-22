import React from 'react';
import {Link} from 'react-router-dom';

import {Table, MyDateFormat} from '../Utils/Utils';

import 'react-table/react-table.css';

export default function SearchEventResults({events = []}) {
  const data = [...events];

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
      <h3>Search Results</h3>
      <Table className="SearchResults" data={data} columns={columns} />
    </React.Fragment>
  );
}
