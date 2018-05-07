import React from 'react';
import PropTypes from 'prop-types';

const Hello = props => (
  <div>
    <h4>{props.title}</h4>
  </div>
);

Hello.defaultProps = {
  title: 'Default title',
};

Hello.propTypes = {
  title: PropTypes.string,
};

export default Hello;
