const Frame = require('./frame')

describe('bowling frame', () => {
  const frame = new Frame();

  it ('starts with an empty frame', () => {
    expect(frame.getScore()).toBe(0);
  });

  it ('adds the first roll to the frame', () => {
    frame.rollPins(4)
    expect(frame.getScore()).toBe(4);
  });

  it ('adds the second roll to the frame and sums the total', () => {
    frame.rollPins(4)
    expect(frame.getScore()).toBe(8);
  });

  // it ('throws an error when trying to roll more than twice', () => {
  //   expect(frame.rollPins(4)).toThrowError('cannot roll more than twice');
  // });

});