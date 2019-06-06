import React from 'react';
import {format as formatDate} from 'date-fns';
import ReactTable from 'react-table';
import {ReactTableDefaults} from 'react-table';

import './Utils.css';
import 'react-table/react-table.css';

Object.assign(ReactTableDefaults, {
  defaultPageSize: 5,
  minRows: 3,
});

export function NiceDate({date, format = 'YYYY-MM-DD'}) {
  console.log('format', formatDate(date, format));
  return formatDate(date, format);
}

export function MyDateFormat(date) {
  let myDate =
    date
      .toLocaleTimeString()
      .split(' ')[0]
      .split(':')[0] +
    ':' +
    date
      .toLocaleTimeString()
      .split(' ')[0]
      .split(':')[1] +
    ' ' +
    date.toLocaleTimeString().split(' ')[1] +
    ' ' +
    date.toLocaleDateString();
  return myDate;
}

export function Hyph() {
  return <span className="Hyph">{' - '}</span>;
}

export function Button({className, ...props}) {
  return <button className={['Button', className].join(' ')} {...props} />;
}

export function Textarea({className, ...props}) {
  return <textarea className={['Textarea', className].join(' ')} {...props} />;
}

export function Input({className, ...props}) {
  return <input className={['Input', className].join(' ')} {...props} />;
}

export function Required({className, ...props}) {
  return (
    <span className={['Required', className].join(' ')} {...props}>
      &#42;
    </span>
  );
}

export function Section({className, list, ...props}) {
  const classes = ['Section', list && 'Section--list', className]
    .filter(Boolean)
    .join(' ');
  return <section className={classes} {...props} />;
}

export function Table({className, ...props}) {
  return <ReactTable className={['Table', className].join(' ')} {...props} />;
}
