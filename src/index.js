import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Hello from './components/Hello';

ReactDOM.render(
  <Hello title="Minimal React Webpack Babel Eslint Setup" />,
  document.getElementById('app'),
);
module.hot.accept();
