import React from 'react';
import App, { doIncrement, doDecrement, Counter } from '../App';

describe('Local state', () => {
  it('increments the value correctly', () => {
    const state = { counter: 0 };
    const newState = doIncrement(state);
    expect(newState.counter).to.equal(1);
  });
  it('decrements the value correctly', () => {
    const state = { counter: 0 };
    const newState = doDecrement(state);
    expect(newState.counter).to.equal(-1);
  });
});

describe('App Component', () => {
  it('renders the Counter wrapper', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Counter)).to.have.length(1);
  });
  it('passes all props to Counter wrapper', () => {
    const wrapper = shallow(<App />);
    let counterWrapper = wrapper.find(Counter);

    expect(counterWrapper.props().counter).to.equal(0);

    wrapper.setState({ counter: -1 });
    counterWrapper = wrapper.find(Counter);
    expect(counterWrapper.props().counter).to.equal(-1);
  });
  it('increments the counter', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ counter: 0 });
    wrapper
      .find('button')
      .at(0)
      .simulate('click');

    expect(wrapper.state().counter).to.equal(1);
  });
  it('decrements the counter', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ counter: 0 });
    wrapper
      .find('button')
      .at(1)
      .simulate('click');

    expect(wrapper.state().counter).to.equal(-1);
  });
});
