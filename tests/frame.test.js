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

  it('recognises a spare', () => {
    frame = new Frame([4, 6]);
    frame2 = new Frame([4, 5]);

    expect(frame.spare()).toEqual(true);
    expect(frame2.spare()).toEqual(false);
  })

  it('recognises a strike', () => {
    frame = new Frame([10]);

    expect(frame.spare()).toEqual(false);
    expect(frame.strike()).toEqual(true);
  })

  it('scores a spare or strike as null', () => {
    frame = new Frame([10]);
    frame2 = new Frame([8, 2]);

    expect(frame.frameScore()).toEqual(null);
    expect(frame2.frameScore()).toEqual(null);
  })
})