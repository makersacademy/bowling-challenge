const Frame = require('../src/frame');

describe('Frame', () => {
  it('constructs a zero frame', () => {
    frame = new Frame([0, 0]);

    expect(frame.rolls).toEqual([0, 0]);
    expect(frame.frameScore()).toEqual(0);
  })

  it('finds score of a simple frame', () => {
    frame = new Frame([1, 2]);

    expect(frame.rolls).toEqual([1, 2]);
    expect(frame.frameScore()).toEqual(3);
  })
})