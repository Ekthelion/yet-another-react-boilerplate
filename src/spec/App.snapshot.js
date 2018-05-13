import React from 'react';
import renderer from 'react-test-renderer';

import App, { Counter } from '../App';

describe('App Snapshot', () => {
  test('renders', () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Counter Snapshot', () => {
  test('renders', () => {
    const component = renderer.create(<Counter counter={1} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
