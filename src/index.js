import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';
import Routes from './Routes';
import './index.css';

browserHistory.listen(() => window.scrollTo(0, 0));

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);
