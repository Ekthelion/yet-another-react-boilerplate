import React from 'react';
import PropTypes from 'prop-types';

export const doIncrement = prevState => ({ counter: prevState.counter + 1 });

export const doDecrement = prevState => ({ counter: prevState.counter - 1 });

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
    };

    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
  }

  onIncrement() {
    this.setState(doIncrement);
  }

  onDecrement() {
    this.setState(doDecrement);
  }

  render() {
    const { counter } = this.state;
    return (
      <div>
        <Counter counter={counter} />
        <button type="button" onClick={this.onIncrement}>
          +
        </button>
        <button type="button" onClick={this.onDecrement}>
          -
        </button>
      </div>
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
