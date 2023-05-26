const Frame = require('../src/frame');

describe('Frame', () => {
  it('constructs a zero frame', () => {
    frame = new Frame([0, 0]);

    expect(frame.rolls).toEqual([0, 0]);
    expect(frame.frameScore()).toEqual(0);
  })
})