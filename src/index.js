import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Hello extends React.Component {
  render() {
    return (
      <div>
        <h4>{this.props.title}</h4>
      </div>
    );
  }
}

Hello.propTypes = {
  title: PropTypes.string,
};

ReactDOM.render(
  <Hello title="Minimal React Webpack Babel Eslint Setup" />,
  document.getElementById('app'),
);
module.hot.accept();
