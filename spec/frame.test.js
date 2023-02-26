const Frame = require('../lib/frame')

describe('frame', () => {
  it('can handle a single roll', () => {
    const frame = new Frame();
    frame.addRoll(5);
    expect(frame.score()).toBe(5);
  });
})