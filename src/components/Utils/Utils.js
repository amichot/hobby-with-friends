import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import ReactTable from 'react-table';
import {ReactTableDefaults} from 'react-table';

import './Utils.css';
import 'react-table/react-table.css';

Object.assign(ReactTableDefaults, {
  defaultPageSize: 5,
  minRows: 3,
});

export function MyDateFormat(date) {
  let myDate =
    new Date(date)
      .toLocaleTimeString()
      .split(' ')[0]
      .split(':')[0] +
    ':' +
    new Date(date)
      .toLocaleTimeString()
      .split(' ')[0]
      .split(':')[1] +
    ' ' +
    new Date(date).toLocaleTimeString().split(' ')[1] +
    ' ' +
    new Date(date).toLocaleDateString();
  return myDate;
}

export function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange,
  };
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
export function test(e) {
  return <Redirect push to="/create" />;
}

export function Table({className, ...props}) {
  return <ReactTable className={['Table', className].join(' ')} {...props} />;
}

export function Span({className, ...props}) {
  return <span className={['Span', className].join(' ')} {...props} />;
}

export function Li({className, ...props}) {
  return <li className={['Li', className].join(' ')} {...props} />;
}

export function Ul({className, ...props}) {
  return <ul className={['Ul', className].join(' ')} {...props} />;
}
