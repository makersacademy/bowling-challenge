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
  test('#addScore - it adds score to the total frame score', () => {
    frame.addScore(4);
    expect(frame.getScore()).toBe(4);
  });
  test('#addScore - returns a Bonus instance if strike', () => {
    expect(frame.addScore(10)).toBe(Bonus.mock.instances[0]);
  });
  test('#addScore - returns a Bonus instance if spare', () => {
    frame.addScore(2);
    expect(frame.addScore(8)).toBe(Bonus.mock.instances[0]);
  });
  test('#addScore - does not return a Bonus instance if no strike/spare', () => {
    expect(frame.addScore(3)).toBeUndefined();
  });
  test('#addScore - does not return a Bonus instance on any bonus rolls', () => {
    frame.addScore(10);
    expect(frame.addScore(4)).toBeUndefined();
  });
  test('#completed - returns a truthy value when strike', () => {
    frame.addScore(10);
    expect(frame.isComplete()).toBeTruthy();
  });
  test('#isComplete - returns a truthy value when 2 rolls have been made', () => {
    frame.addScore(2);
    frame.addScore(1);
    expect(frame.isComplete()).toBeTruthy();
  });
  test('#isComplete - returns falsy value when 1 rolls have been made', () => {
    frame.addScore(2);
    expect(frame.isComplete()).toBeFalsy();
  });
});
