import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
    };

    this.doIncrement = this.doIncrement.bind(this);
    this.doDecrement = this.doDecrement.bind(this);
  }

  doIncrement() {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
  }

  doDecrement() {
    this.setState(prevState => ({
      counter: prevState.counter - 1,
    }));
  }

  render() {
    const { counter } = this.state;
    return (
      <React.Fragment>
        <Counter counter={counter} />
        <button type="button" onClick={this.doIncrement}>
          +
        </button>
        <button type="button" onClick={this.doDecrement}>
          -
        </button>
      </React.Fragment>
    );
  }
}

const Counter = ({ counter }) => <div>{counter}</div>;

Counter.defaultProps = {
  counter: 0,
};

Counter.propTypes = {
  counter: PropTypes.number,
};

export default App;
