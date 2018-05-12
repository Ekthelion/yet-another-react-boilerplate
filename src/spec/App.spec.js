import { expect } from 'chai';
import { doDecrement, doIncrement } from '../App';

describe('Local state', () => {
  it('should increment the counter in local state', () => {
    const state = { counter: 0 };
    const newState = doIncrement(state);
    expect(newState.counter).to.equal(1);
  });

  it('should decrement the counter in local state', () => {
    const state = { counter: 0 };
    const newState = doDecrement(state);
    expect(newState.counter).to.equal(-1);
  });
});
