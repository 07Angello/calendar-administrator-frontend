import React from 'react';
import ReactDOM from 'react-dom';
import { CalendarApp } from './CalendarApp';

import './styles.css';

console.log(process.env);

ReactDOM.render(
  <React.StrictMode>
    <CalendarApp />
  </React.StrictMode>,
  document.getElementById('root')
);
