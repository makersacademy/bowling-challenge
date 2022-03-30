const Frame = require('./frame')

describe('bowling frame', () => {
  const frame = new Frame();

  it ('starts with an empty frame', () => {
    expect(frame.getScore()).toBe(0);
  });

});