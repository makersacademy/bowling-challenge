jest.mock('../lib/bonus.js');
const Bonus = require('../lib/bonus');
const Frame = require('../lib/frame');

describe('Frame', () => {
  let frame;
  beforeEach(() => {
    Bonus.mockClear();
    frame = new Frame();
  });
  test('#getScore - score is 0 at the start of the frame', () => {
    expect(frame.getScore()).toBe(0);
  });
  test('#roll - it adds score to the total frame score', () => {
    frame.roll(4);
    expect(frame.getScore()).toBe(4);
  });
  test('#roll - returns a Bonus instance if strike', () => {
    expect(frame.roll(10)).toBe(Bonus.mock.instances[0]);
  });
  test('#roll - returns a Bonus instance if spare', () => {
    frame.roll(2);
    expect(frame.roll(8)).toBe(Bonus.mock.instances[0]);
  });
  test('#roll - does not return a Bonus instance if no strike/spare', () => {
    expect(frame.roll(3)).toBeNull();
  });
  test('#completed - returns true when strike', () => {
    frame.roll(10);
    expect(frame.completed()).toBeTruthy();
  });
  test('#completed - returns a truthy value when 2 rolls have been made', () => {
    frame.roll(2);
    frame.roll(1);
    expect(frame.completed()).toBeTruthy();
  });
  test('#completed - returns falsy value when 1 rolls have been made', () => {
    frame.roll(2);
    expect(frame.completed()).toBeNull();
  });
});
